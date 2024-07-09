function showVotes() {
    var _a;
    var showVotes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : [0, 0, 0, 0, 0];
    var node = document.createElement("p");
    node.innerHTML = "<label>!</label> - " + showVotes[0] + " votes<br>" + "<label>@</label> - " + showVotes[1] + " votes<br>" + "<label>#</label> - " + showVotes[2] + " votes<br>" + "<label>$</label> - " + showVotes[3] + " votes<br>" + "<label>%</label> - " + showVotes[4] + " votes<br>";
    (_a = document.getElementById("votes")) === null || _a === void 0 ? void 0 : _a.appendChild(node);
}
