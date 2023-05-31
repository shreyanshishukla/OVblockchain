
var Election =artifacts.require('./Election.sol')

contract("Election", function(accounts) {
    before(async()=>{
        ele=await Election.new()
        await ele.addCandidate("ABC",1234)
    })
    it("initializes with new candidate",async function() {
       const count= await ele.candidatesCount();
       const c=3;
       assert.equal(count.toString(),c.toString())

      });
      it("check name of new candidate", async function() {
        const candidate= await ele.candidates(1234);
        assert.equal(candidate.name,"ABC")
    
      });
      it("check successful vote for candidate", async function() {
        await ele.vote(1234);
        const candidate=await ele.candidates(1234)
       const c=1;
        assert.equal(candidate.voteCount.toString(),c.toString())
    
      });
    });
  