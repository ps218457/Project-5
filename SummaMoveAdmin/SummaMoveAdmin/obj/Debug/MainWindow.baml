   M S B A M L   `   `   `  ����I  ESummaMoveAdmin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null/clr-namespace:SummaMoveAdminSummaMoveAdmin  5   	       SummaMoveAdmin.MainWindow   5   	   \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   .localclr-namespace:SummaMoveAdmin     5   	   _ [MaterialDesignThemes.Wpf, Version=4.5.0.0, Culture=neutral, PublicKeyToken=df2a72020bd7962aFmaterialDesign1http://materialdesigninxaml.net/winfx/xaml/themes  5      -   5        $	��600��5
      $
��1080��6   
�������  � 
ResizeMode$  NoResize=�6/    � WindowStartupLocation$ CenterScreen=�6E    � WindowStyle$
 None=�6j    � WindowState$ 	Maximized=�6�    � 	Resources 5         OpenMenu �� TargetProperty �� 
TargetName9  3System.Windows.Media.Animation.EasingDoubleKeyFrame O� KeyTime O� Value  	CloseMenu��%�  &	        &	 �     �� 5   
   .��5      U� $ (FrameworkElement.Width)�6,   $ GridMenu��6a   .\�5        $ 0��6'   $ 70Q�63     5      $ 0:0:0.5��6'   $	 200Q�69   5      5      �� 5   
   .��5      U� $ (FrameworkElement.Width)�6,   $ GridMenu��6a   .\�5        $ 0��6'   $	 200Q�63     5      $ 0:0:0.5��6'   $ 70Q�69   5      5      5      	 � Triggers	 5      :� 5   
   
 :� RoutedEvent$
 ButtonBase.Click��6    :� 
SourceName$ ButtonOpenMenu��66   .[�5      �� #��[  6   5      :� 5   
   $
 ButtonBase.Click��6   $ ButtonCloseMenu��66   .[�5      �� #��[ 6   5      .��5!      � -   5         �Name$ 
Gridwindow��5!   "   ���	#FFDEDEDE � ColumnDefinitions 5"   
   �� 5#      $��2* �6   �� 5$      $	��17* �6    � RowDefinitions 5&   
   �� 5'      $��2* �6   �� 5(      $	��16* �6   .+�5*   
   � -   5        $ GridMain��5*      $��1��6!   $��1��6.   5,      � 5-   
   ���#d70096$��1��6&   $��0��66    54      �� 55      $��8* �6#   �� 56      $	��19* �6#    J� Effect 58      3  -System.Windows.Media.Effects.DropShadowEffect  59         
BlurRadius$ 1Q�6#      ShadowDepth$ 1Q�62      Color$ #24126e��6B   .+�5;      ��  �� Orientation$ 
Horizontal=�6   $��Right=�62   $��1��6N   .+�5<      �� -   5         ��Name$ TBName��5<      $��Center=�6,   $��16(�6G   '  !MaterialDesignThemes.Wpf.PopupBox  5=         PlacementMode$ BottomAndAlignRightEdges=�6*      	StaysOpen .  $��10q�6e      PopupContent. 5>      �� $	��150��6!   .+�5?      �� -   5        .��5@      '  !MaterialDesignThemes.Wpf.PackIcon     Kind$ Power=�66   $��25��6C   $��25��6O   $��10q�6Z   5A      5D      5E      5F      �� 5G      $��Center=�6   $��Center=�65   $��30(�6P   $��1��6^   $��161,15,480,15q�6n   
�������$��Black"�6�   	SUMMAMOVE6�   5H      � 5I   
   -   5        $ GridMenu��5I      ���#24126e$��0��68   $��0��6H   $��2��6U    5J        5K      $ 2Q�6#   $ 1Q�62   $ 	#FFAEAEAE��6B   .+�5M      �� .+�5N      � $	��150��6   
������� J� RenderTransformOrigin$ 0.5,0.5&�67   z�5O      V� 5P      .~�5Q      �� �� 5R      �� 5S      T� 5T      5U      .+�5W      �� -   5         ��Name$ ButtonOpenMenu��5W      $
��Auto��65   $��60��6C   $��	0,10,0,80q�6N   $
��Left=�6a    0 ,MaterialDesignFloatingActionMiniAccentButton#��[ 6|   ���	#FF31577E��6�   Z� ��6�   Z� .��5X        $
 Menu=�62   $��25��6>   $��25��6I   5Y      �� 5Z      -   5        $ ButtonCloseMenu��5Z      $y�	Collapsed=�66   $��60��6M   $��60��6Y   $��	50,10,0,0q�6d   $��Right=�6w   $	��Top=�6�   #��[ 6�   ���	#FF31577E��6�   Z� ��6  Z� 6  �� 5^      $��80��6   $��Bottom=�6(   5_      �� 5`      -	   5         ��Name$ ListViewMenu��5`      ���#fc0303$��Disabled=�6F   .@�5d      �� -
   5         ��Name$ ItemGebruikers��5d   #   $��60��6;   .��5e      �� $ 
Horizontal=�6%   .+�5f        $ AccountCircleOutline=�66   $��25��6R   $��25��6^   $��10q�6i   �� 5g      $��
Gebruikers��6(   $��Center=�6:   $��20 10q�6U   5h      5i      �� 5j      -   5        $ ItemPrestaties��5j   #   $��60��6;   .��5k      �� $ 
Horizontal=�6%   .+�5l        $ ChartAreaSpline=�66   $��25��6M   $��25��6Y   $��10q�6d   �� 5m      $��
Prestaties��6(   $��Center=�6:   $��20 10q�6V   5n      5o      �� 5p      -   5        $ ItemOefening��5p   #   $��60��69   .��5q      �� $ 
Horizontal=�6%   .+�5s        $ RunFast=�66   $��25��6E   $��25��6Q   $��10q�6\   �� 5t      $��	Oefening ��6(   $��Center=�69   $��20 10q�6T   5u      5v      5w      5x      5y      5z      5{      