using System;

namespace Beginner
{
    public static class GasConsume
    {
        public static void Init()
        {
            int t = int.Parse(Console.ReadLine());
            int velMed = int.Parse(Console.ReadLine());
            float consumo = (t * velMed) / (12.0f);

            Console.WriteLine(string.Format("{0:0.000}", consumo));
        }
    }
}