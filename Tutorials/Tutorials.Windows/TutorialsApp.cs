using Xenko.Engine;

namespace Tutorials.Windows
{
    class TutorialsApp
    {
        static void Main(string[] args)
        {
            using (var game = new Game())
            {
                game.Run();
            }
        }
    }
}
