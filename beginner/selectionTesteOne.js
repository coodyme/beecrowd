using System;

namespace Beginner
{
    public static class SelectionTesteOne
    {
        public static void Init()
        {
            string[] line = Console.ReadLine().Split();
            int a = int.Parse(line[0]);
            int b = int.Parse(line[1]);
            int c = int.Parse(line[2]);
            int d = int.Parse(line[3]);
            int soma1 = c + d;
            int soma2 = a + b;

            if ((b > c) && (d > a) && (soma1 > soma2) && (c >= 0) && (c > 0) && (d > 0) && (a % 2 == 0))
            {
                Console.WriteLine("Valores aceitos");
            }
            else
            {
                Console.WriteLine("Valores nao aceitos");
            }
        }
    }
}