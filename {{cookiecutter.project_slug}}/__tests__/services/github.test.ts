import { GitHubService } from '../../src/services/github';
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

// mock fetch call to GitHub API
jest.mock('node-fetch', () => jest.fn());

describe('github service', () => {
    test('should return repos', async () => {
        const mockedResponse = [
            {id: 1}, {id: 2}
        ];
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
            new Response(JSON.stringify(mockedResponse))
        );
        const githubService: GitHubService = new GitHubService();
        const response = await githubService.fetchRepos('ardydedase');
        expect(response.length).toBe(2);
    });
});

