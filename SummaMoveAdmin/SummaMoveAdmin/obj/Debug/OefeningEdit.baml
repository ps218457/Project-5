   M S B A M L   `   `   `  ����I  ESummaMoveAdmin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null/clr-namespace:SummaMoveAdminSummaMoveAdmin  5   	   !    SummaMoveAdmin.OefeningEdit   5   	   \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   .localclr-namespace:SummaMoveAdmin     5   	     � Title$  OefeningEdit��5   	   $	��600��6   $
��1000��6,   .��5	      � ��5
   
   �� 5      .��5      �  � Color$ #d70096��6    � Offset$ 0Q�6/   � 5      $ #24126e��6   $	 1.0Q�6/   � 5      $ #BA1016��6   $	 0.5Q�6/   5       � ColumnDefinitions 5   
   �� 5      $��20 �6   �� 5      $��3* �6   �� 5      $��3* �6   �� 5      $��20 �6    � RowDefinitions 5   
   �� 5      $��1* �6   �� 5      $��6* �6   �� 5      $��1* �6   .+�5   
   �� $��1��6   $��1��6#   $��Center=�64   .+�5      ]� $��0,0,0,10q�6   .+�5      �� $��0,0,30,0q�6   $��20(�6.   Naam6B   �� 5       -   5         ��Name$ TBNaam��5       
�������$��20(�6=   $	��323��6K   6Y   5!      ]� 5"      .+�5#      �� $��0,0,0,0q�6   $��20(�6-   Beschrijving6I   �� 5$      -   5        $ TBBeschrijving��5$      
�������$��20(�6E   $	��200��6S   $	��324��6`    �� TextWrapping$
 Wrap=�6l   6�   5%      �� 5&      -   5         ��Name$ 	BTOpslaan��5&      $��Center=�6(   $��Center=�6C   $��Opslaan��6`   $��20(�6r   $��0,10,0,0q�6�   6�   5(      �� 5*   
   $��1��6   $��2��6"   $��Center=�63    � DataContext 6N   �� *
Oefening+.+�5+      �� -   5        	 ��Name$
	 imag��5+   ,   $	��300��6:   $	��300��6G   $
��88,0q�6S   ��6   �� *Foto+6S   �� 5,      -   5        $ Selectpicture��5,   M   $��Center=�6   $��Center=�60   $��Select a picture��6�   5.      50      51      