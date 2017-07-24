// Author - Anshu Dutta
// Email- anshu.dutta@gmail.com
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TW.GameOfLife
{
    /// <summary>
    /// Context class for the state pattern
    /// </summary>
    public class Cell
    {
        private State _state;
        private List<Cell> _neighbors;

        public Cell()
        {            
            _neighbors = new List<Cell>();
        }
        
        /// <summary>
        /// Constructor
        /// </summary>
        public Cell(State state) 
        {
            _state = state;
            _neighbors = new List<Cell>();
        }

        public State State
        {
            get
            {
                return _state;
            }
            set
            {
                _state = value;
            }
        }
        public int Row { get; set; }
        public int Col { get; set; }

        public List<Cell> Neighbors 
        {
            get { return _neighbors; }
            set { _neighbors = value; }
        }
                
    }
}
