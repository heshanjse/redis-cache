module.exports = async function getRepos(req,res,next) {
  try {
    console.log('Fetching Data..');
    const {username} = req.params;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    res.send(data);

  } catch (error) {
    console.log(error)
  }
  
}