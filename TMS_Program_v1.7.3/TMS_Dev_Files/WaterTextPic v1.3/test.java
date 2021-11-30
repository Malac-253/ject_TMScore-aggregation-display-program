import java.awt.Color; // For setting color of the watermark text  
import java.awt.Font;// For setting font of the watermark text
import java.awt.Graphics; 
import java.awt.image.BufferedImage; 
import java.io.File; 
import java.lang.*;
import java.io.IOException; 
import javax.imageio.ImageIO; 
import java.util.Scanner;  // Import the Scanner class
import java.lang.Object;
import java.awt.Component;
import java.awt.Container;
import javax.swing.JComponent;
import javax.swing.JOptionPane;
import javax.swing.*;




public class WaterMark 
{ 
	public static void main(String[] args) 
	{ 
      //0 Variables in my control
         //File
            String files_types=("png");
		      String file_name=("Av5.png");
            //String out_file_name=("output1.png");
            
         //Text Design          
            String font_type=("Arial"); //Stand Arial
            int font_size = 16;int color_opacity = 255; //Stand 16|255 //Size Max = 1000 | Opacity Max = 255
            int font_height= (16);//Stand 16
            int font_ColorR = 055;//Stand 055 // Color Max = 255
            int font_ColorG = 030;//Stand 030 //Color Max = 255
            int font_ColorB = 030;//Stand 030 //Color Max = 255
         //Text Function
            int char_perline = 116;//Stand 116 
            int char_spabuf = 7;//Stand 07 
         //Postion
            int x_start = 95; //Stand 95 //less = Left
            int y_start = 270; //Stand 270 //less = up       
      //1 Creating space in RAM
         //BufferedImage img = null; File f = null;
      //2 Trying to Read image
      //3 create BufferedImage object of same width andheight as of input image 
		   //try{img = ImageIO.read(new File(file_name));}catch(IOException e){System.out.println(e);} 
		   //BufferedImage temp = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_INT_RGB); 
      //4 Create graphics object and add originalimage to it ||Set Variables my (watermark) text 
         // Create a Scanner object|Gets user input| Output user input
            //Scanner top_comment = new Scanner(System.in);System.out.println("Enter Comment"); 
            //String Text_to_add = top_comment.nextLine();
            
           //  Scanner top_tag = new Scanner(System.in);System.out.println("Enter PersonTag"); 
//             String TText_to_add = top_tag.nextLine();
//             
//             Scanner next_comment = new Scanner(System.in);System.out.println("Enter Comment"); 
//             String TTText_to_add = next_comment.nextLine();
              
            


         String Text_to_add = JOptionPane.showInputDialog("Enter Comment");
            System.out.println("Text_to_add recieved"); 
            
         boolean mis = textmission(Text_to_add,char_spabuf,char_perline,x_start,y_start,
                           font_type,font_size,font_ColorR,font_ColorG,font_ColorB,
                           color_opacity,font_height,file_name,("output1.png"),files_types);
//                            
//          boolean miss = textmission(TText_to_add,char_spabuf,char_perline,x_start,(y_start+60),
//                            font_type,font_size,font_ColorR,font_ColorG, font_ColorB,
//                            color_opacity,font_height,("output1.png"),("output1.png"),files_types);
//                            
//          boolean misss = textmission(TText_to_add,char_spabuf,char_perline,x_start,(y_start+100),
//                            font_type,font_size,font_ColorR,font_ColorG, font_ColorB,
//                            color_opacity,font_height,("output1.png"),("output1.png"),files_types);
//    }  
   
   
   
   }
   public static boolean textmission(String Text_to_add, int char_spabuf, int char_perline, int x_start, int y_start,
                           String font_type, int font_size, int font_ColorR, int font_ColorG,int font_ColorB, 
                           int color_opacity,int font_height,String file_name, String out_file_name,String files_types)
   {    
      //3 Create graphics object and add originalimage to it ||Set Variables my (watermark) text 
      //4 Create graphics object and add originalimage to it ||Set Variables my (watermark) text 
      //5 Counting and sorting | Counts each character except space 
      //6 Text Manager 
      BufferedImage img = null; File f = null;      
         try{img = ImageIO.read(new File(file_name));}catch(IOException e){System.out.println(e);} 
		   BufferedImage temp = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_INT_RGB);
         
      Graphics object_graphics = creatingGraphicObject(font_type,font_size,font_ColorR,font_ColorG,
                                                      font_ColorB,color_opacity,img,temp);
      boolean mis  = addthis_comment(Text_to_add,char_spabuf,char_perline,x_start,y_start,object_graphics,
                                                      temp,font_height,f,out_file_name,files_types);
      return true;
   }
   
   public static Graphics creatingGraphicObject(String font_type, int font_size, int font_ColorR, 
                                 int font_ColorG, int font_ColorB, int color_opacity,BufferedImage img,BufferedImage temp) 
   {
      //BufferedImage temp = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_INT_RGB);
      //Create graphics object and add originalimage to it
      Graphics object_graphics = temp.getGraphics();object_graphics.drawImage(img, 0, 0, null);
      object_graphics.setFont(new Font(font_type,Font.BOLD, font_size));
      object_graphics.setColor(new Color(font_ColorR, font_ColorG,font_ColorB,color_opacity));
      return object_graphics;
   }
      
   public static boolean addthis_comment(String Text_to_add,int char_spabuf,int char_perline,int x_start,int y_start,
                                 Graphics object_graphics,BufferedImage temp, int font_height,File f,
                                 String out_file_name,String files_types) 
   {        
      int count = 0; int countB = 0; int lines = 0; boolean breaker = false; String stringToBe_Inserted =("\n");                
      for(int i = 0; i < Text_to_add.length(); i++){ 
         if(((count+char_spabuf)% char_perline)==0) {breaker = true;} //set up break at next space
         if(Text_to_add.charAt(i) != ' ') {count++;countB++;}//adds to count if char is not space
         if((breaker==true)&(Text_to_add.charAt(i)==' ')){//if break needed, adds at next space
            lines++;//System.out.println("New Line inserted at index: "+ i);
            count = count+stringToBe_Inserted.length();
            Text_to_add = insertString(Text_to_add,stringToBe_Inserted,i);// Insert the String
            breaker = false;}//System.out.println(Text_to_add);  
         }  
      //Displays the total number of characters present in the given string 
         //System.out.println("Total number of characters in a string with funtion: " + count); 
         //System.out.println("Total number of characters in a string without: " + countB);
         //System.out.println("Total number of lines in a string: " + lines);
         //System.out.println(Text_to_add);
      //Making the lines 
         String [] i_lines = Text_to_add.split("\n");
      //here comes the iteration over all lines
         //System.out.println(i_lines.length);
         for( int lineCount = 0;lineCount < (i_lines.length); lineCount ++)
         {
         int xPos = x_start;
         int yPos = y_start + lineCount * font_height;
         String line = i_lines[lineCount];
         //System.out.println(line);
         object_graphics.drawString(line, xPos, yPos);
         //System.out.println(lineCount);
         }     
      // releases any system resources that it is using 
      object_graphics.dispose(); // releases any system resources that it is using
      f = new File(out_file_name); 
      try{ImageIO.write(temp,files_types, f);}catch(IOException e){System.out.println(e);}//trying to update image
      return true;
   }  
   public static String insertString(String originalString,String stringToBeInserted,int index)
   { 
      // Function to insert string
      String newString = new String();// Create a new string  
      for (int i = 0; i < originalString.length(); i++) 
         {newString += originalString.charAt(i);	// Insert the original string character into the new string  
          if (i == index){newString += stringToBeInserted;}// Insert the string to be inserted into the new string 
         }// return the modified String 	 
      return newString;
   }
} 

   
   
   
   
   

