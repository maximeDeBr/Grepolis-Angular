﻿using System;

namespace GrepolistoolsAPI.Models
{
    public class Conquer
    {
        public DateTime Date { get; private set; }
        public int Town_Id { get; private set; }
        public World World { get; set; }
        public int World_Id { get; private set; }
        public string Server_Name { get; private set; }
        public string OldOwner { get; private set; }
        public string NewOwner { get; private set; }
        public string OldAlliance { get; private set; }
        public string NewAlliance { get; private set; }
        public int Points { get; private set; }
    }
}