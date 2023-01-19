using Kendo_Demo.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Kendo_Demo.DataSource
{
    public class APIClass
    {

        ConnectionModel _cm = new ConnectionModel();

        public DataTable GetTopics()
        {
            DataTable ds = new DataTable();
            //  SqlParameter[] para = new SqlParameter[1];

            //  para[0] = new SqlParameter("@tblname", "foodshop_facili");

            ds = _cm.GetDataTable("select * from tb_topics");

            return ds;
        }
        public DataTable GetGrids()
        {
            DataTable ds = new DataTable();

            ds = _cm.GetDataTable("select * from tb_kendogrid");

            return ds;
        }

        public DataTable AddGrids(GridViewModel grid)
        {
            DataTable ds = new DataTable();

            _cm.IUD("insert into tb_kendogrid(DemoKey,DemoValue,DemoGroup)values('" + grid.DemoKey + "'," + grid.DemoValue + ",'" + grid.DemoGroup + "')");
            
            return ds;
        }

        public DataTable UpdateGrids(GridViewModel grid)
        {
            DataTable ds = new DataTable();

            _cm.IUD("update tb_kendogrid set DemoKey='" + grid.DemoKey + "',DemoValue=" + grid.DemoValue + ",DemoGroup='" + grid.DemoGroup + "' where ID=" + grid.ID);

            return ds;
        }

        public DataTable DeleteGrids(int ID)
        {
            DataTable ds = new DataTable();

            _cm.IUD("delete from tb_kendogrid where ID=" + ID);

            return ds;
        }

        public DataTable GetKendoList()
        {
            DataTable ds = new DataTable();

            ds = _cm.GetDataTable("select * from tb_kendolist");

            return ds;
        }

    }
}