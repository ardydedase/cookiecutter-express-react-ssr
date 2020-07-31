import express from 'express';
import { GitHubService } from '../services/github';

const router = express.Router();

router.get('/repos/:username', async (req, res) => {
    const githubService: GitHubService = new GitHubService();
    try {
        const response = await githubService.fetchRepos(req.params.username);
        res.status(200).send(response);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

export default router;
