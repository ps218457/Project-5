using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SummaMoveAdmin.Models
{
   public class Prestatie :Users
    {
        public int ID { get; set; }
        public string User_id { get; set; }
        public string Oefening_id { get; set; }
        public DateTime Datum { get; set; }
        public TimeSpan Starttijd { get; set; }
        public TimeSpan Eindtijd { get; set; }
        public int Aantal { get; set; }

        public string Naam { get; set; }
        public string Beschrijving { get; set; }
        public byte[] foto { get; set; }
    }
}
