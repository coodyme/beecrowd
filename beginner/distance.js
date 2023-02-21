using System;

namespace Beginner
{
    public static class Distance
    {
        public static void Init()
        {
            int x = 60;
            int y = 90;
            int dist = int.Parse(Console.ReadLine());

            int tempo = 2 * dist;

            Console.WriteLine(tempo + " minutos");
        }
    }
}