   M S B A M L   `   `   `  ����I  ESummaMoveAdmin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null/clr-namespace:SummaMoveAdminSummaMoveAdmin  5      *    $SummaMoveAdmin.UserControlGebruikers   5      \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5      R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      .localclr-namespace:SummaMoveAdmin     5      .��5	      �   � ColumnDefinitions  5
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
   $��
Gebruikers��6   $��1��6&   $��1��66   $��2��6C    �� TextAlignment$ Center=�6Y   $	��260��6p   $��Bottom=�6}   ���#fc0303$��40(�6�   $��340,0,272,14q�6�   �� 5   
    �� Orientation$ 
Horizontal=�6   $��2��6.   $��1��6;   $��2��6K   $��Center=�6_   $��Center=�6|   .+�5      �� $
��Left=�6   $��Center=�64   $��15(�6O   $��0,0,10,0q�6]   
���   �
Zoekbalk6�   �� 5      -   5         ��Name$ TBzoek��5      $	��720��6'   $��Right=�63   $��Center=�6P   
�������
���   �6�   5      &   System.Windows.Controls.DataGrid  5    
   $��1��6   $��2��6$   $��4��61   $��14(�6F      SelectionMode$ Single=�6U      CanUserAddRows .     AutoGenerateColumns .     
IsReadOnly . $��10,60,10,10q�6�   $��2��6�   ���#fc0303��6�   �� *Users+	 �� SelectedItem	 6  �� *SelectedUser+
   Columns
 5!      0  *System.Windows.Controls.DataGridTextColumn  5"      ,  &System.Windows.Controls.DataGridColumn   Header$ ID��6>   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6'   �� *ID+   ElementStyle 5#      �� 5$       �� 
TargetType" ��6    .�5%      ��  �� Property � �� �� Value$ 15(�69   6F   �� 5&       � ��$ Black"�6;   6K   5'      5)        5*      $ First name ��6?      Width5  /System.Windows.Controls.DataGridLengthConverter$	 100 6T    6%   �� *Name+ 5+      �� 5,      " ��6    .�5-      ��  � ��$ 15(�69   6F   �� 5.       � ��$ Black"�6;   6K   5/      51        52      $ Email��6?   $	 300 6O    6%   �� *Email+ 53      �� 54      " ��6    .�55      ��  � ��$ 15(�69   6F   �� 56       � ��$ Black"�6;   6K   57      59      4  .System.Windows.Controls.DataGridTemplateColumn  5;         CellTemplate 5<      �� 5=      .R�5>      �� -   5        
�������.��5?   "   �� $��Assets/wijzigen.png��6(   $��30��6E   $��25��6Q   5@      5A      5C        5D       5E      �� 5F      .R�5G      �� -   5        
�������.��5H   "   �� $��Assets/verwijderen.png��6(   $��30��6H   $��25��6T   5I      5J      5M      5O      �� 5R   
   -   5        $��Center=�5R   (   $��Center=�6E   $��3��6`   $��2��6p   $��60��6   $��40��6�   
�������
�������.��5S      �� $��Assets/plus-outline.png��6   $��40��65   $��30��6A   5T      5V      5W      