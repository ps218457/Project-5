   M S B A M L   `   `   `  ����I  ESummaMoveAdmin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null/clr-namespace:SummaMoveAdminSummaMoveAdmin  5      (    "SummaMoveAdmin.UserControlOefening   5      \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5      R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      .localclr-namespace:SummaMoveAdmin     5      _ [MaterialDesignThemes.Wpf, Version=4.5.0.0, Culture=neutral, PublicKeyToken=df2a72020bd7962aFmaterialDesign1http://materialdesigninxaml.net/winfx/xaml/themes  5      .��5
      �   � ColumnDefinitions  5   
   �� 5      $
��20px �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $
��80px �6   �� 5      $
��20px �6    � RowDefinitions 5   
   �� 5      $
��20px �6   �� 5      $��1* �6   �� 5      $
��70px �6   �� 5      $��4* �6   �� 5      $��1* �6   �� 5      $
��20px �6   .+�5   
   �� $��1��6   $��1��6$   $��3��61   ���#24126e6F   �� 5   
   $��
Oefeningen��6   $��1��6&   $��1��66   $��2��6C    �� TextAlignment$ Center=�6Y   $	��260��6p   $��Bottom=�6}   ���#fc0303$��40(�6�   $��340,0,272,14q�6�   �� 5   
    �� Orientation$ 
Horizontal=�6   $��2��6.   $��1��6;   $��2��6K   $��Center=�6_   $��Center=�6|   .+�5      �� $
��Left=�6   $��Center=�64   $��15(�6O   $��0,0,10,0q�6]   
���   �
Zoekbalk6�   �� 5      -   5         ��Name$ TBzoek��5      $	��720��6'   $��Right=�63   $��Center=�6P   
�������
���   �6�   5      &   System.Windows.Controls.DataGrid  5!   
   $��1��6   $��2��6$   $��4��61   $��14(�6F      SelectionMode$ Single=�6U      CanUserAddRows .     AutoGenerateColumns .     
IsReadOnly . $��10,60,10,10q�6�   $��2��6�   ���#fc0303��6�   �� *
Oefeningen+	 �� SelectedItem	 6  �� *SelectedOefening+
   Columns
 5"      0  *System.Windows.Controls.DataGridTextColumn  5#      ,  &System.Windows.Controls.DataGridColumn   Header$ ID��6>   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6'   �� *ID+   ElementStyle 5$      �� 5%       �� 
TargetType" ��6    .�5&      ��  �� Property � �� �� Value$ 15(�69   6F   �� 5'       � ��$ Black"�6;   6K   5(      5*        5+      $ Naam ��6?      Width5  /System.Windows.Controls.DataGridLengthConverter$	 100 6N    6%   �� *Naam+ 5,      �� 5-      " ��6    .�5.      ��  � ��$ 15(�69   6F   �� 5/       � ��$ Black"�6;   6K   50      52      4  .System.Windows.Controls.DataGridTemplateColumn  55         CellTemplate 56      �� 57      .R�58      �� -   5        
�������.��59   "   �� $��Assets/wijzigen.png��6(   $��30��6E   $��25��6Q   5:      5;      5=        5>       5?      �� 5@      .R�5A      �� -   5        
�������.��5B   "   �� $��Assets/verwijderen.png��6(   $��30��6H   $��25��6T   5C      5D      5G        5H       5I      �� 5J      .R�5K      ��  ��Name$ Inzien��6%   -   5        
�������.��5L   "   �� $��Assets/oog.png��6(   $��30��6@   $��40��6L   5M      5N      5Q        5S       5T      �� 5U      .R�5V      �� $ QRMaken��6%   -   5        ���#24126e���#24126e.��5W   "   '  !MaterialDesignThemes.Wpf.PackIcon     Kind$ QrCode=�6:   $��25��6H   $��40��6T   ���#24126e6`   5Y      5Z      5]      5_      �� 5b   
   -   5        $��Center=�5b   (   $��Center=�6E   $��3��6`   $��2��6p   $��60��6   $��40��6�   
�������
�������.��5c      �� $��Assets/plus-outline.png��6   $��40��65   $��30��6A   5d      5f      5g      