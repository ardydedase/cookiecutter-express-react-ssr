import express from 'express';
import { GitHubService } from '../services/github';

const router = express.Router();

router.get('/', async (req, res) => {
    // TODO: Move to a separate service file.
    const githubService: GitHubService = new GitHubService();
    try {
        await githubService.fetchRepos('ardydedase');
        res.status(200).send({
            status: 'healthy',
        });
    } catch (e) {
        res.status(500).send(e.message);
    }
});

export default router;
