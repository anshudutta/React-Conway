// Author - Anshu Dutta
// Email- anshu.dutta@gmail.com
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TW.GameOfLife
{
    public class Universe
    {
        private int _dimRow, _dimCol;
        private List<Cell> _cells;
        
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="DimRow"></param>
        /// <param name="DimCol"></param>
        /// <param name="Cells"></param>
        public Universe(int DimRow, int DimCol, List<Cell> Cells)
        {
            _dimRow = DimRow;
            _dimCol = DimCol;
            _cells = new List<Cell>();
            _cells = Cells;            
        }

        /// <summary>
        /// Property - Cells in the Universe Grid
        /// </summary>
        public List<Cell> Cells
        {
            get
            {
                Regenerate();                
                return _cells;
            }
            set
            {                
                _cells = value;
            }
        }

        /// <summary>
        /// Regenerate Cells for One Tick
        /// </summary>
        private void Regenerate()
        {
            List<Cell> _newCells = new List<Cell>();
            // Set the neighbors for each cell
            SetNeighbors();
            
            // Calculate new state for cells
            foreach (Cell item in _cells)
            {
                // calculate number of living neighbors
                int livingNeighbors = 0;
                foreach (Cell cell in item.Neighbors)
                {
                    if (cell.State.GetStateType()==typeof(Alive))
                    {
                        livingNeighbors += 1;
                    }
                }

                // Apply rule

                // If cells are living
                if (item.State.GetStateType() == typeof(Alive))
                {
                    // Living Cells Die
                    if (livingNeighbors < 2 || livingNeighbors > 3)
                    {
                        _newCells.Add(new Cell()
                        {
                            Row = item.Row,
                            Col = item.Col,
                            //CellState = State.Dead
                            State = new Dead()
                        });
                    }
                    // Living Cells Live
                    else
                        _newCells.Add(new Cell()
                        {
                            Row = item.Row,
                            Col = item.Col,
                            //CellState = State.Living
                            State = new Alive()
                        });
                }
                // If cells are dead
                else
                {
                    // dead cells come alive
                    if (livingNeighbors == 3)
                    {
                        _newCells.Add(new Cell()
                        {
                            Row = item.Row,
                            Col = item.Col,
                            //CellState = State.Living
                            State = new Alive()
                        });
                    }
                    // dead cells continue to die
                    else
                    {                        
                        _newCells.Add(new Cell()
                        {
                            Row = item.Row,
                            Col = item.Col,
                            //CellState = State.Dead
                            State = new Dead()
                        });
                    }
                }                    
            }

            _cells = _newCells;            
        }

        /// <summary>
        /// Set Neighbors for each cell
        /// </summary>
        private void SetNeighbors()
        {
            foreach (Cell item in _cells)
            {                
                // neighbor in same row - Left
                if (item.Col > 0)
                {                    
                    item.Neighbors.Add(new Cell() 
                    { 
                        Row = item.Row, 
                        Col = item.Col - 1, 
                        State=GetCellState(item.Row,item.Col-1)
                    });
                }

                // neighbor in same row - Right    
                if (item.Col < _dimCol - 1)
                {
                    item.Neighbors.Add(new Cell()
                    {
                        Row = item.Row,
                        Col = item.Col + 1,
                        State = GetCellState(item.Row, item.Col +1)
                    });    
                }
                    
                // neighbors in same col - Above
                if (item.Row > 0)
                {                    
                    item.Neighbors.Add(new Cell() 
                    { 
                        Row = item.Row - 1, 
                        Col = item.Col,
                        State = GetCellState(item.Row-1, item.Col)
                    });                    
                }

                // neighbors in same col - Below
                if (item.Row < _dimRow-1)
                {                    
                    item.Neighbors.Add(new Cell() 
                    { 
                        Row = item.Row +1, 
                        Col = item.Col,
                        State = GetCellState(item.Row +1, item.Col)
                    });                    
                }

                // neighbor diagonal - Left Above
                if (item.Row>0 && item.Col>0)
                {
                    item.Neighbors.Add(new Cell()
                    {
                        Row = item.Row - 1,
                        Col = item.Col - 1,
                        State = GetCellState(item.Row-1, item.Col-1)
                    });
                }

                // neighbor diagonal - Right above
                if (item.Row>0 && item.Col<_dimCol-1)
                {
                    item.Neighbors.Add(new Cell()
                    {
                        Row = item.Row - 1,
                        Col = item.Col + 1,
                        State = GetCellState(item.Row-1, item.Col+1)
                    });  
                }

                // neighbor diagonal - Left Below
                if (item.Row<_dimRow-1 && item.Col>0 )
                {
                    item.Neighbors.Add(new Cell()
                    {
                        Row = item.Row + 1,
                        Col = item.Col - 1,
                        State = GetCellState(item.Row+1, item.Col-1)
                    });
                }

                // neighbor diagonal - Right Below
                if (item.Row<_dimRow-1 && item.Col<_dimCol-1)
                {
                    item.Neighbors.Add(new Cell()
                    {
                        Row = item.Row + 1,
                        Col = item.Col + 1,
                        State = GetCellState(item.Row+1, item.Col+1)
                    });
                }            
            }
        }

        /// <summary>
        /// Return State of a cell based on its position - Living or Dead
        /// </summary>
        /// <param name="row"></param>
        /// <param name="col"></param>
        /// <returns></returns>
        private State GetCellState(int row, int col)
        {            
            Cell cell = _cells.Find((c) => { return (c.Row == row && c.Col == col); });            
            return cell.State;
        }
    }
}
