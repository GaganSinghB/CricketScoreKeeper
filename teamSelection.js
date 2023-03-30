function getData(){
    var selectedTeam_01 = document.getElementById("selectedTeam_01").value;
    var selectedTeam_02 = document.getElementById("selectedTeam_02").value;
    localStorage.setItem("team_01", selectedTeam_01);
    localStorage.setItem("team_02", selectedTeam_02);
}