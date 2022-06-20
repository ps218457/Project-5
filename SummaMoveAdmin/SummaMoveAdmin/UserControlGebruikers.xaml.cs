using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
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
    /// Interaction logic for UserControlGebruikers.xaml
    /// </summary>
    public partial class UserControlGebruikers : UserControl, INotifyPropertyChanged
    {
        #region PropertyChanged
        public event PropertyChangedEventHandler PropertyChanged;
        // Create the OnPropertyChanged method to raise the event
        // The calling member's name will be used as the parameter.
        protected void OnPropertyChanged([CallerMemberName] string name = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
        }
        #endregion

        #region Propertys

        SummaMoveDB dB = new SummaMoveDB();

        private ObservableCollection<Users> user = new ObservableCollection<Users>();
        public ObservableCollection<Users> Users
        {
            get { return user; }
            set { user = value; }
        }

        private Models.Users selecteduser;
        public Models.Users SelectedUser
        {
            get { return selecteduser; }
            set
            {
                selecteduser = value; OnPropertyChanged();
            }
        }
        #endregion

        public UserControlGebruikers()
        {
            InitializeComponent();
            LoadData();
            DataContext = this;
        }

        private void LoadData()
        {
            if (dB.GetAlleUser() == null)
            {
                MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            else
            {

                List<Users> Gebruiker = dB.GetAlleUser();
                try
                {
                    Users.Clear();
                    foreach (Users item in Gebruiker)
                    {
                        Users.Add(item);
                    }
                }
                catch
                {
                    Users.Clear();
                    MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

                }
            }
        }

        private void Update_Click(object sender, RoutedEventArgs e)
        {
            GebruikerEdit gebruikerEdit = new GebruikerEdit((int)selecteduser.ID);
            gebruikerEdit.ShowDialog();
            LoadData();
        }

        private void Delete_Click(object sender, RoutedEventArgs e)
        {
            if (!dB.DeleteUsersById((int)selecteduser.ID))
            {
                MessageBox.Show("Er is een fout bij het verwijderen");
                return;
            };
            LoadData();
        }

        private void Create_Click(object sender, RoutedEventArgs e)
        {
            GebruikerMaken gebruikerMaken = new GebruikerMaken();
            gebruikerMaken.ShowDialog();
            LoadData();
        }

        private void TBzoek_TextChanged(object sender, TextChangedEventArgs e)
        {
            if ((string.IsNullOrEmpty(TBzoek.Text)))
            {
                LoadData();
            }
            else
            {
                string zoek = TBzoek.Text;
                if (dB.zoekUser(zoek) == null)
                {
                    MessageBox.Show("Er is geen pesoon met de zoeke gegevens ", "", MessageBoxButton.OK, MessageBoxImage.Error);
                    LoadData();
                }
                else
                {

                    List<Users> gebruiker = dB.zoekUser(zoek);
                    try
                    {
                        Users.Clear();
                        foreach (Users item in gebruiker)
                        {
                            Users.Add(item);
                        }
                    }
                    catch
                    {
                        Users.Clear();
                        MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

                    }
                }
            }
        }
    }
}
