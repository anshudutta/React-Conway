// Author - Anshu Dutta
// Email- anshu.dutta@gmail.com
using TW.GameOfLife;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;

namespace Tw.GameOfLife.TestHarness
{
    
    
    /// <summary>
    ///This is a test class for UniverseTest and is intended
    ///to contain all UniverseTest Unit Tests
    ///</summary>
    [TestClass()]
    public class UniverseTest
    {


        private TestContext testContextInstance;

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }

        #region Additional test attributes
        // 
        //You can use the following additional attributes as you write your tests:
        //
        //Use ClassInitialize to run code before running the first test in the class
        //[ClassInitialize()]
        //public static void MyClassInitialize(TestContext testContext)
        //{
        //}
        //
        //Use ClassCleanup to run code after all tests in a class have run
        //[ClassCleanup()]
        //public static void MyClassCleanup()
        //{
        //}
        //
        //Use TestInitialize to run code before running each test
        //[TestInitialize()]
        //public void MyTestInitialize()
        //{
        //}
        //
        //Use TestCleanup to run code after each test has run
        //[TestCleanup()]
        //public void MyTestCleanup()
        //{
        //}
        //
        #endregion


        /// <summary>
        ///A test for Cells
        ///</summary>
        [TestMethod()]
        public void CellsTestBlockPattern()
        {
            // Test Case 1 - Block Pattern
            int DimRow = 2; // TODO: Initialize to an appropriate value
            int DimCol = 2; // TODO: Initialize to an appropriate value
            // TODO: Initialize to an appropriate value
            List<Cell> Cells = new List<Cell>()
                {
                    new Cell{Row=0, Col=0,State=new Alive()},
                    new Cell{Row=0, Col=1,State=new Dead()},
                    new Cell{Row=1, Col=0,State=new Alive()},
                    new Cell{Row=1, Col=1,State=new Alive()}
                };
            // TODO: Initialize to an appropriate value
            Universe target = new Universe(DimRow, DimCol, Cells);
            // TODO: Initialize to an appropriate value
            List<Cell> expected = new List<Cell>()
                {
                    new Cell{Row=0, Col=0,State=new Alive()},
                    new Cell{Row=0, Col=1,State=new Alive()},
                    new Cell{Row=1, Col=0,State=new Alive()},
                    new Cell{Row=1, Col=1,State=new Alive()}
                };
            List<Cell> actual = new List<Cell>();
            //target.Cells = expected;
            actual = target.Cells; 
            // Collection Assert not working
            //CollectionAssert.AreEqual(actual, expected, "Pass");
            bool result = false;
            for (int i = 0; i < expected.Count; i++)
            {
                if (expected[i].State.GetStateType() != actual[i].State.GetStateType())
                {
                    result = true;
                    break;
                }
            }
            Assert.IsFalse(result, "Test Case 1 Failed");
        }
        [TestMethod()]
        public void CellsTestBloatPattern()
        {
            // Test Case 2 - Bloat Pattern
            int DimRow = 3; // TODO: Initialize to an appropriate value
            int DimCol = 3; // TODO: Initialize to an appropriate value
            // TODO: Initialize to an appropriate value
            List<Cell> Cells = new List<Cell>()
                {
                    new Cell{Row=0, Col=0,State=new Alive()},
                    new Cell{Row=0, Col=1,State=new Alive()},
                    new Cell{Row=0, Col=2,State=new Dead()},
                    new Cell{Row=1, Col=0,State=new Alive()},
                    new Cell{Row=1, Col=1,State=new Dead()},
                    new Cell{Row=1, Col=2,State=new Alive()},
                    new Cell{Row=2, Col=0,State=new Dead()},
                    new Cell{Row=2, Col=1,State=new Alive()},
                    new Cell{Row=2, Col=2,State=new Dead()}
                };
            // TODO: Initialize to an appropriate value
            Universe target = new Universe(DimRow, DimCol, Cells);
            // TODO: Initialize to an appropriate value
            List<Cell> expected = new List<Cell>()
                {
                    new Cell{Row=0, Col=0,State=new Alive()},
                    new Cell{Row=0, Col=1,State=new Alive()},
                    new Cell{Row=0, Col=2,State=new Dead()},
                    new Cell{Row=1, Col=0,State=new Alive()},
                    new Cell{Row=1, Col=1,State=new Dead()},
                    new Cell{Row=1, Col=2,State=new Alive()},
                    new Cell{Row=2, Col=0,State=new Dead()},
                    new Cell{Row=2, Col=1,State=new Alive()},
                    new Cell{Row=2, Col=2,State=new Dead()}
                };
            List<Cell> actual = new List<Cell>();
            //target.Cells = expected;
            actual = target.Cells;
            //CollectionAssert.AreEqual(actual, expected);
            //Assert.AreEqual(actual, expected, "Pass");    
            bool result = false;
            for (int i = 0; i < expected.Count; i++)
            {
                if (expected[i].State.GetStateType() != actual[i].State.GetStateType())
                {
                    result = true;
                    break;
                }
            }
            Assert.IsFalse(result, "Test Case 2 Failed");
        }
        [TestMethod()]
        public void CellsTestBlinkerPattern()
        {
            // Test Case 2 - Bloat Pattern
            int DimRow = 3; // TODO: Initialize to an appropriate value
            int DimCol = 3; // TODO: Initialize to an appropriate value
            // TODO: Initialize to an appropriate value
            List<Cell> Cells = new List<Cell>()
                {
                    new Cell{Row=0, Col=0,State=new Dead()},
                    new Cell{Row=0, Col=1,State=new Alive()},
                    new Cell{Row=0, Col=2,State=new Dead()},
                    new Cell{Row=1, Col=0,State=new Dead()},
                    new Cell{Row=1, Col=1,State=new Alive()},
                    new Cell{Row=1, Col=2,State=new Dead()},
                    new Cell{Row=2, Col=0,State=new Dead()},
                    new Cell{Row=2, Col=1,State=new Alive()},
                    new Cell{Row=2, Col=2,State=new Dead()}
                };
            // TODO: Initialize to an appropriate value
            Universe target = new Universe(DimRow, DimCol, Cells);
            // TODO: Initialize to an appropriate value
            List<Cell> expected = new List<Cell>()
                {
                    new Cell{Row=0, Col=0,State=new Dead()},
                    new Cell{Row=0, Col=1,State=new Dead()},
                    new Cell{Row=0, Col=2,State=new Dead()},
                    new Cell{Row=1, Col=0,State=new Alive()},
                    new Cell{Row=1, Col=1,State=new Alive()},
                    new Cell{Row=1, Col=2,State=new Alive()},
                    new Cell{Row=2, Col=0,State=new Dead()},
                    new Cell{Row=2, Col=1,State=new Dead()},
                    new Cell{Row=2, Col=2,State=new Dead()}
                };
            List<Cell> actual = new List<Cell>();
            //target.Cells = expected;
            actual = target.Cells;
            //CollectionAssert.AreEqual(actual, expected);
            //Assert.AreEqual(actual, expected, "Pass");
            bool result = false;
            for (int i = 0; i < expected.Count; i++)
            {
                if (expected[i].State.GetStateType() != actual[i].State.GetStateType())
                {
                    result = true;
                    break;
                }
            }
            Assert.IsFalse(result, "Test Case 3 Failed");
        }
        [TestMethod()]
        public void CellsTestToadPattern()
        {
            // Test Case 2 - Toad Pattern
            int DimRow = 2; // TODO: Initialize to an appropriate value
            int DimCol = 4; // TODO: Initialize to an appropriate value
            // TODO: Initialize to an appropriate value
            List<Cell> Cells = new List<Cell>()
                {
                    new Cell{Row=0, Col=0,State=new Dead()},
                    new Cell{Row=0, Col=1,State=new Alive()},
                    new Cell{Row=0, Col=2,State=new Alive()},
                    new Cell{Row=0, Col=3,State=new Alive()},
                    new Cell{Row=1, Col=0,State=new Alive()},
                    new Cell{Row=1, Col=1,State=new Alive()},
                    new Cell{Row=1, Col=2,State=new Alive()},
                    new Cell{Row=1, Col=3,State=new Dead()}                    
                };
            // TODO: Initialize to an appropriate value
            Universe target = new Universe(DimRow, DimCol, Cells);
            // TODO: Initialize to an appropriate value
            List<Cell> expected = new List<Cell>()
                {
                    new Cell{Row=0, Col=0,State=new Alive()},
                    new Cell{Row=0, Col=1,State=new Dead()},
                    new Cell{Row=0, Col=2,State=new Dead()},
                    new Cell{Row=1, Col=0,State=new Alive()},
                    new Cell{Row=1, Col=1,State=new Alive()},
                    new Cell{Row=1, Col=2,State=new Dead()},
                    new Cell{Row=2, Col=0,State=new Dead()},
                    new Cell{Row=2, Col=1,State=new Alive()}                    
                };
            List<Cell> actual = new List<Cell>();
            //target.Cells = expected;
            actual = target.Cells;
            //CollectionAssert.AreEqual(actual, expected);
            //Assert.AreEqual(actual, expected, "Pass");
            bool result = false;
            for (int i = 0; i < expected.Count; i++)
            {
                if (expected[i].State.GetStateType() != actual[i].State.GetStateType())
                {
                    result = true;
                    break;
                }
            }
            Assert.IsFalse(result, "Test Case 4 Failed");
        }
    }
}
