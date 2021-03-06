﻿using System;
using System.Collections.Generic;

namespace GrepolistoolsAPI.Models
{
    public class Player
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public int? Alliance_Id { get; set; }
        public int Points { get; set; }
        public int Rank { get; set; }
        public int? Towns { get; set; }
        public World World { get; private set; }
        public int World_Id { get; private set; }
        public string Server_Name { get; private set; }
        public DateTime Date { get; private set; }

        public Player_Att PointsAttacking { get; private set; }
        public Player_Def PointsDefending { get; private set; }

    }
}