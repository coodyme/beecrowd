using System;

namespace Beginner
{
    public static class Snack
    {
        public static void Init()
        {
            string[] line = Console.ReadLine().Split();
            int cod = int.Parse(line[0]);
            int qnt = int.Parse(line[1]);
            float valor = 0f;

            switch (cod)
            {
                case 1:
                    valor = 4.0f;
                    break;
                case 2:
                    valor = 4.5f;
                    break;
                case 3:
                    valor = 5.0f;
                    break;
                case 4:
                    valor = 2.0f;
                    break;
                case 5:
                    valor = 1.5f;
                    break;
            }

            float total = qnt * valor;
            Console.WriteLine("Total: R$ " + string.Format("{0:0.00}", total));
        }
    }
}