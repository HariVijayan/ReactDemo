function showVotes(){
    const showVotes: number[] = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')!) : [0, 0, 0, 0, 0];
    const node=document.createElement("p");
    node.innerHTML = "<label>!</label> - " + showVotes[0] + " votes<br>" + "<label>@</label> - " + showVotes[1] + " votes<br>" + "<label>#</label> - " + showVotes[2] + " votes<br>" + "<label>$</label> - " + showVotes[3] + " votes<br>" + "<label>%</label> - " + showVotes[4] + " votes<br>";
    document.getElementById("votes")?.appendChild(node);
}