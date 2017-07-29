import Cell from '../../src/middleware/cell';
import Population from '../../src/middleware/population';
import chai, {expect} from 'chai';

describe("generate new population", function(){
  it("creates a new universe from scratch", function(){
    var population = new Population(2,2);
    expect(population.rows).equal(2);
    expect(population.cols).equal(2);
    expect(population.cells).to.not.be.undefined;
  });
});

describe("test known patterns", () => {

  it("block pattern", () => {
    var block = new Array();
    block.push(new Cell(0,0,1));
    block.push(new Cell(0,1,1));
    block.push(new Cell(1,0,1));
    block.push(new Cell(1,1,1));

    var actual = new Population(2,2,block);
    expect(block).to.deep.equal(actual.cells);
  });

  it("bloat pattern", function(){
    var bloat = new Array();
    bloat.push(new Cell(0,0,1));
    bloat.push(new Cell(0,1,1));
    bloat.push(new Cell(0,2,0));
    bloat.push(new Cell(1,0,1));
    bloat.push(new Cell(1,1,0));
    bloat.push(new Cell(1,2,1));
    bloat.push(new Cell(2,0,0));
    bloat.push(new Cell(2,1,1));
    bloat.push(new Cell(2,2,0));

    const actual = new Population(3, 3, bloat);
    expect(bloat).to.deep.equal(actual.cells);
  });

  it("blinker pattern", function(){

  });

});
