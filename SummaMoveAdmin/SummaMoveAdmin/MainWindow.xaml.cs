using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using SummaMoveAdmin.Models;


namespace SummaMoveAdmin
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

    

    

        private void ListViewMenu_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            UserControl usc = null;
            GridMain.Children.Clear();

            switch (((ListViewItem)((ListView)sender).SelectedItem).Name)
            {
                case "ItemGebruikers":
                    usc = new UserControlGebruikers();
                    GridMain.Children.Add(usc);
                    break;
                case "ItemPrestaties":
                    usc = new UserControlPrestaties();
                    GridMain.Children.Add(usc);
                    break;
                case "ItemOefening":
                    usc = new UserControlOefening();
                    GridMain.Children.Add(usc);
                    break;

            }
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            this.Close();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            UserControl usc = null;
           
            usc = new UserControlGebruikers();
            GridMain.Children.Add(usc);
        }
    }
}
