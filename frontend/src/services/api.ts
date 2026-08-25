const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

/**
 * Helper to handle fetch responses and errors consistently.
 */
async function fetchWithHandler(url: string, options?: RequestInit) {
  // Mock delay to simulate network for the prototype
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, you would uncomment this:
  /*
  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
  */
  
  console.log(`[Mock API Call] ${options?.method || 'GET'} ${API_BASE_URL}${url}`);
  return { status: 'mock' };
}

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------
export async function getDashboardStats() {
  return fetchWithHandler('/dashboard/stats');
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export async function getProjects() {
  return fetchWithHandler('/projects');
}

export async function getProject(projectId: string) {
  return fetchWithHandler(`/projects/${projectId}`);
}

export async function createProject(data: any) {
  return fetchWithHandler('/projects', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// ---------------------------------------------------------------------------
// Analysis & Harness
// ---------------------------------------------------------------------------
export async function startAnalysis(projectId: string) {
  return fetchWithHandler(`/projects/${projectId}/analyze`, { method: 'POST' });
}

export async function getAnalysisStatus(projectId: string) {
  return fetchWithHandler(`/projects/${projectId}/analyze/status`);
}

export async function generateHarness(projectId: string, targetFunction: string) {
  return fetchWithHandler(`/projects/${projectId}/harness/generate`, {
    method: 'POST',
    body: JSON.stringify({ targetFunction }),
  });
}

// ---------------------------------------------------------------------------
// Fuzzing & Results
// ---------------------------------------------------------------------------
export async function startFuzzing(projectId: string, harnessId: string) {
  return fetchWithHandler(`/projects/${projectId}/fuzz`, {
    method: 'POST',
    body: JSON.stringify({ harnessId }),
  });
}

export async function getFuzzingMetrics(campaignId: string) {
  return fetchWithHandler(`/campaigns/${campaignId}/metrics`);
}

export async function getFindings(projectId: string) {
  return fetchWithHandler(`/projects/${projectId}/findings`);
}

export async function getReport(projectId: string) {
  return fetchWithHandler(`/projects/${projectId}/report`);
}
