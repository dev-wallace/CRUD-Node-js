export const fetch = async (req, res) => {
    try {
        return res.json("Hello from fetch user controller");
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}