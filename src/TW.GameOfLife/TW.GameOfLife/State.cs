// Author - Anshu Dutta
// Email- anshu.dutta@gmail.com
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TW.GameOfLife
{    
    public abstract class State
    {
        public abstract Type GetStateType();
    }

    public class Alive : State
    {
        public override Type GetStateType()
        {
            return this.GetType();
        }
    }

    public class Dead : State
    {
        public override Type GetStateType()
        {
            return this.GetType();
        }
    }
}
