import useFetch from "../hooks/useFetch";

const DataFetcher = () => {
  const data = useFetch('https://api.github.com/users/mdsiaofficial');

  return (
    <div className="user-info">
      <h2>{data.name}</h2>
      <img src={data.avatar_url} alt={`${data.name}'s avatar`} style={{width: '150px', borderRadius: '50%'}} />
      <p><strong>Bio:</strong> {data.bio}</p>
      <p><strong>Location:</strong> {data.location}</p>
      <p><strong>Company:</strong> {data.company}</p>
      <p><strong>Blog:</strong> <a href={data.blog} target="_blank" rel="noopener noreferrer">{data.blog}</a></p>
      <p><strong>GitHub:</strong> <a href={data.html_url} target="_blank" rel="noopener noreferrer">{data.html_url}</a></p>
      <div className="stats">
        <p><strong>Public Repos:</strong> {data.public_repos}</p>
        <p><strong>Followers:</strong> {data.followers}</p>
        <p><strong>Following:</strong> {data.following}</p>
      </div>
    </div>
  );
};

export default DataFetcher;