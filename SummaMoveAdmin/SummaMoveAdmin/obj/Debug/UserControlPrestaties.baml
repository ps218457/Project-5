   M S B A M L   `   `   `  ����I  ESummaMoveAdmin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null/clr-namespace:SummaMoveAdminSummaMoveAdmin  5      *    $SummaMoveAdmin.UserControlPrestaties   5      \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5      R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      .localclr-namespace:SummaMoveAdmin     5      .��5	      �   � ColumnDefinitions  5
   
   �� 5      $
��20px �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $
��80px �6   �� 5      $
��20px �6    � RowDefinitions 5   
   �� 5      $
��20px �6   �� 5      $��1* �6   �� 5      $
��70px �6   �� 5      $��4* �6   �� 5      $��1* �6   �� 5      $
��20px �6   .+�5   
   �� $��1��6   $��1��6$   $��3��61   ���#24126e6F   �� 5   
   $��	Prestatie��6   $��1��6%   $��1��65   $��2��6B    �� TextAlignment$ Center=�6X   $	��260��6o   $��Bottom=�6|   ���#fc0303$��40(�6�   $��340,0,272,14q�6�   ]� 5   
   $��2��6   $��1��6"   .+�5      �� $��15(�6   $��20,23,30,19q�6&   
���   �$��28��6N   $	��146��6Z   	ZoekDatum6s   (  "System.Windows.Controls.DatePicker  5      -   5          Name$ DPdatum��5   :   
���   �$��40��6.   $��0,0,20,0q�6�   �� 5      -   5         ��Name$ BTDatumverwijderen��5      $
��0,19q�6R   $	��265��6`   .��6m   Datum leeg maken6   �� 5       $
��Left=�6   $��Center=�64   $��15(�6O   $��	20,0,10,0q�6]   
���   �
Zoekbalk6�   �� 5!      -   5         ��Name$ TBzoek��5!      $	��344��6'   $
��Left=�63   
�������
���   �$��	0,22,0,22q�6�   6�   5#      &   System.Windows.Controls.DataGrid  5%   
   $��1��6   $��3��6$   $��3��61   $��14(�6F      SelectionMode$ Single=�6U      CanUserAddRows .     AutoGenerateColumns .  	   
IsReadOnly	 . ��6�   �� *	Prestatie+
   Columns
 5&      0  *System.Windows.Controls.DataGridTextColumn  5'      ,  &System.Windows.Controls.DataGridColumn   Header$ #��6=   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6&   �� *ID+   ElementStyle 5(      �� 5)       �� 
TargetType" ��6    .�5*      ��  �� Property � �� �� Value$ 15(�69   6F   �� 5+       � ��$ Black"�6;   6K   5,      5.        5/      $ Gebruiker Naam ��6?      Width5  /System.Windows.Controls.DataGridLengthConverter$	 200 6X    6%   �� *Name+ 50      �� 51      " ��6    .�52      ��  � ��$ 15(�69   6F   �� 53       � ��$ Black"�6;   6K   54      56        57      $ Oefening Naam��6>   $	 200 6V    6%   �� *Naam+ 58      �� 59      " ��6    .�5:      ��  � ��$ 15(�69   6F   �� 5;       � ��$ Black"�6;   6K   5<      5>        5?      $  Datum ��6`   $	 250 6s    6&   �� *Datum+ �� StringFormat$ ddd, dd MMM yyy�� 5@      �� 5A      " ��6    .�5B      ��  � ��$ 15(�69   6F   �� 5C       � ��$ Black"�6;   6K   5D      5F        5G      $  Starttijd ��6Y   $	 100 6o    6%   �� *	Starttijd+$ hh\:mm�� 5H      �� 5I      " ��6    .�5J      ��  � ��$ 15(�69   6F   �� 5K       � ��$ Black"�6;   6K   5L      5N        5O      $ 
 Eindtijd ��6X   $	 200 6m    6%   �� *
Eindtijd+$ hh\:mm�� 5P      �� 5Q      " ��6    .�5R      ��  � ��$ 15(�69   6F   �� 5S       � ��$ Black"�6;   6K   5T      5V        5W      $  Aantal ��6@   $	 100 6S    6%   �� *Aantal+ 5X      �� 5Y      " ��6    .�5Z      ��  � ��$ 15(�69   6F   �� 5[       � ��$ Black"�6;   6K   5\      5^      5b      5e      5f      