using System;

namespace Beginner
{
    public static class TheMajor
    {
        public static void Init()
        {
            string[] line = Console.ReadLine().Split();

            double a = double.Parse(line[0]);
            double b = double.Parse(line[1]);
            double c = double.Parse(line[2]);

            double maior1 = ((a + b + Math.Abs(a - b)) / 2);
            double maior2 = ((maior1 + c + Math.Abs(maior1 - c)) / 2);

            Console.WriteLine(maior2 + " eh o maior");
        }
    }
}