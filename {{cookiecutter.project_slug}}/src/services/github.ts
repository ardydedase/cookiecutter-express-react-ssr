import { Exception } from 'handlebars';
import fetch from 'node-fetch';
import { logger } from '../utils/logger';


class RepoNotFoundException extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class GitHubService {
  fetchRepos = async(username: string) => {
    const url = `https://api.github.com/users/${username}/repos`;
    try {
      const response = await fetch(url);
      logger.info(`fetching GitHub URL: ${url}`);
      if (response.status === 404) {
        const notFoundMessage = `repo not found: ${url}`;
        logger.error(notFoundMessage);
        throw new RepoNotFoundException(notFoundMessage);
      } else if (response.status !== 200) {
        const errorMessage = `problem calling API: ${url}`;
        logger.error(errorMessage);
        throw new Error(errorMessage);
      }
      let data = await response.json();
      return data;
    } catch(e) {
      console.log(e);
      throw new Error("There is a problem calling the API");
    }

  }
}