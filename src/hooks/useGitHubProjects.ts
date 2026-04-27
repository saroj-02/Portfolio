import { useState, useEffect } from 'react';

export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  homepage: string;
  topics: string[];
  image?: string;
  figma_url?: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  homepage: string | null;
  topics?: string[];
  fork: boolean;
}

export function useGitHubProjects(username: string) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data: GitHubRepo[] = await response.json();

        // Filter out forks and transform data
        const mappedData: Project[] = data
          .filter((repo) => !repo.fork)
          .map((repo) => ({
            id: repo.id,
            name: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            description: repo.description || 'A professional software project developed with modern technologies.',
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            language: repo.language || 'Unknown',
            homepage: repo.homepage || '',
            topics: repo.topics || [],
            image: ''
          }));

        setProjects(mappedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [username]);

  return { projects, loading, error };
}
