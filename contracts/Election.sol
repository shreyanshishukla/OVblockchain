pragma solidity >=0.4.22 <0.8.0;

contract Election {
    uint public candidatesCount;
    uint public totalVotes;
     struct Candidate
      {
        uint id;
        string name;
        uint voteCount; 
     }
     mapping(uint=>Candidate) public candidates;
    constructor() public {
      candidatesCount=0;
    totalVotes=0;
      addCandidate("shivang",123);
      addCandidate("Shreyanshi",343);
        
    }
    function addCandidate(string memory _name,uint _id) private
    {
        candidatesCount++;
        candidates[_id]=Candidate(_id,_name,0);
    }
      function vote (uint _candidateId) public {
      
        candidates[_candidateId].voteCount ++;
        totalVotes++;
    }
}
//test