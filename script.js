var url =  `https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=A2GrZs9e9MMVCirYlaHCFkzzrHMZwbNZ`;




fetch(url)
      .then(response => response.json())
      .then(data => (document.getElementById("headline").innerHTML = data.results[0].title));
  fetch(url)
      .then(response => response.json())
      .then(data => (  document.getElementById("story").innerHTML = data.results[0].abstract));
  fetch(url)
      .then(response => response.json())
      .then(data => (  document.getElementById("story_date").innerHTML = data.results[0].published_date)); 
  fetch(url)
      .then(response => response.json())
      .then(data => (  document.getElementById("link").href = data.results[0].url));

      
