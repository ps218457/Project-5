﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SummaMoveAdmin.Models
{
   public class Oefening
    {
        public int ID { get; set; }
        public string Naam { get; set; }
        public string Beschrijving { get; set; }
        public byte[] Foto { get; set; }
        
    }
}
