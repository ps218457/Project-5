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
using System.Windows.Navigation;
using System.Windows.Shapes;
using SummaMoveAdmin.Models;
namespace SummaMoveAdmin
{
    /// <summary>
    /// Interaction logic for UserControlPrestaties.xaml
    /// </summary>
    public partial class UserControlPrestaties : UserControl
    {
        SummaMoveDB dB = new SummaMoveDB();

        private ObservableCollection<Prestatie> prestatie = new ObservableCollection<Prestatie>();
        public ObservableCollection<Prestatie> Prestatie
        {
            get { return prestatie; }
            set { prestatie = value; }
        }
        public UserControlPrestaties()
        {
            InitializeComponent();
            LoadData();

            DataContext = this;
        }

        private void LoadData()
        {


            if (dB.GetPrestaties() == null)
            {
                MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            else
            {

                List<Prestatie> prestatie = dB.GetPrestaties();
                try
                {
                    Prestatie.Clear();
                    foreach (Prestatie item in prestatie)
                    {
                        Prestatie.Add(item);
                    }
                }
                catch
                {
                    Prestatie.Clear();
                    MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }

        private void DatePicker_SelectedDateChanged(object sender, SelectionChangedEventArgs e)
        {
            
            if (DPdatum.SelectedDate == null)
            {
                LoadData();
            }
            else
            {
                if (dB.ZoekPrestatieOpDatum(DPdatum.SelectedDate.Value) == null)
                {
                    MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);
                    LoadData();
                }
                else
                {

                    List<Prestatie> prestatie = dB.ZoekPrestatieOpDatum(DPdatum.SelectedDate.Value);
                    try
                    {
                        Prestatie.Clear();
                        foreach (Prestatie item in prestatie)
                        {
                            Prestatie.Add(item);
                        }
                    }
                    catch
                    {
                        Prestatie.Clear();
                        MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
            }

        }

        private void BTDatumverwijderen_Click(object sender, RoutedEventArgs e)
        {
            TBzoek.Text = "";
            DPdatum.SelectedDate = null;
        }

        private void TBzoek_TextChanged(object sender, TextChangedEventArgs e)
        {
            DPdatum.SelectedDate = null;
            if ((string.IsNullOrEmpty(TBzoek.Text)))
            {
                LoadData();
            }
            else
            {
                string zoek = TBzoek.Text;
                if (dB.zoePrestatie(zoek) == null)
                {
                    MessageBox.Show("Er is geen pesoon met de zoeke gegevens ", "", MessageBoxButton.OK, MessageBoxImage.Error);
                    LoadData();
                }
                else
                {

                    List<Prestatie> prestatie = dB.zoePrestatie(zoek);
                    try
                    {
                        Prestatie.Clear();
                        foreach (Prestatie item in prestatie)
                        {
                            Prestatie.Add(item);
                        }
                    }
                    catch
                    {
                        Prestatie.Clear();
                        MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

                    }
                }
            }
        }
    }
}
