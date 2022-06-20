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
using System.Windows.Shapes;
using SummaMoveAdmin.Models;
namespace SummaMoveAdmin
{
    /// <summary>
    /// Interaction logic for GebruikerEdit.xaml
    /// </summary>
    public partial class GebruikerEdit : Window
    {
        int id = 0;
        public GebruikerEdit( int ID)
        {
            InitializeComponent();
            id = id + ID;
            LoadData();
        }


        SummaMoveDB dB = new SummaMoveDB();
        private void LoadData()
        {
            if (dB.getUsersBYID(id) == null)
            {
                MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

            }
            else
            {

                Users user = dB.getUsersBYID(id);
                TBVoornaam.Text = user.Name;
                TBEmail.Text = user.Email;
               
            }

        }

        private void BTOpslaan_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                if (!dB.UpdateUser(id, TBVoornaam.Text, TBEmail.Text))
                {
                    MessageBox.Show("Er is een fout bij het update");
                    return;
                }
                this.Close();
            }
            catch
            {
                MessageBox.Show("Er is een fout bij het update");
            }
        }
    }
    
}
