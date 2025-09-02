export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`/api/github/repos/${username}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.statusText}`);
  }
  return response.json();
}

export async function fetchCachedRepos(): Promise<GitHubRepo[]> {
  const response = await fetch("/api/repos");
  if (!response.ok) {
    throw new Error(`Failed to fetch cached repositories: ${response.statusText}`);
  }
  return response.json();
}
