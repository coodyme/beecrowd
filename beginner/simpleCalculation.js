using System;

namespace Beginner
{
    public static class SimpleCalculation
    {
        public static void Init()
        {
            string[] line1 = Console.ReadLine().Split();
            string[] line2 = Console.ReadLine().Split();

            float total = ((float.Parse(line1[1]) * float.Parse(line1[2])) + (float.Parse(line2[1]) * float.Parse(line2[2])));
            Console.WriteLine("VALOR A PAGAR: " + "R$ " + string.Format("{0:0.00}", total));
        }
    }
}