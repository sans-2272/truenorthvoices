let votes = {
  unified: 0,
  pluralistic: 0
};

function vote(option) {
  // Simulate vote tally (replace this with server data if needed)
  votes[option]++;

  // Calculate total votes
  const totalVotes = votes.unified + votes.pluralistic;

  // Calculate percentages
  const unifiedPercent = Math.round((votes.unified / totalVotes) * 100);
  const pluralisticPercent = 100 - unifiedPercent;

  // Update bar widths
  document.getElementById("bar-unified").style.width = unifiedPercent + "%";
  document.getElementById("bar-pluralistic").style.width = pluralisticPercent + "%";

  // Update percent labels
  document.getElementById("percent-unified").innerText = unifiedPercent + "%";
  document.getElementById("percent-pluralistic").innerText = pluralisticPercent + "%";

  // Disable further voting (simulated single vote)
  document.querySelectorAll(".poll-option").forEach(el => el.onclick = null);
}

