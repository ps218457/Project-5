using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
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
    /// Interaction logic for OefeningInzien.xaml
    /// </summary>
    public partial class OefeningInzien : Window
    {
        int id = 0;
        public OefeningInzien( int ID)
        {
            InitializeComponent();
            id = id + ID;
            LoadData();

            DataContext = this;
        }
        private ObservableCollection<Oefening> oefening = new ObservableCollection<Oefening>();
        public ObservableCollection<Oefening> Oefening
        {
            get { return oefening; }
            set { oefening = value; }     // Informeer XAML indien gewijzigd
        }
        SummaMoveDB dB = new SummaMoveDB();
        private void LoadData()
        {
            if (dB.getOefeningBYID(id) == null)
            {
                MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

            }
            else
            {

                Oefening oefeningen = dB.getOefeningBYID(id);
                Oefening.Clear();                    // Maak Observable Collection eerst leeg
                Oefening.Add(oefeningen);
                TBNaam.Text = oefeningen.Naam;
                TBBeschrijving.Text = oefeningen.Beschrijving;





            }

        }
    }
}
