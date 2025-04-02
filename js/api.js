const fetchSongsByMood = async (mood) => {
    const term = encodeURIComponent(mood);
    const response = await fetch(`https://itunes.apple.com/search?term=${term}&entity=song&limit=10`);
    const data = await response.json();
    return data.results || [];
  };
  
  export default fetchSongsByMood;
  