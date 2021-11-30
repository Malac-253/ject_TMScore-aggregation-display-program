import java.awt.Color; // For setting color of the watermark text  
import java.util.ArrayList; // import the ArrayList class 
import java.awt.Font;// For setting font of the watermark text
import java.awt.Graphics; 
import java.awt.image.BufferedImage;
import java.io.BufferedWriter; 
import java.io.Writer;
import java.io.File; 
import java.io.FileWriter;
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
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.file.Files;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Random;

public class WaterMark 
{ 
	public static void main(String[] args) 
	{ 
       
      
      
      callFileinputReset();
      int yPos;
      //0 Variables in my control
         //File
            String files_types=("png");
		      String file_name=("AFinal.png");
            String Curr_file=null;
            String CurrIn_file=null;
            String Curr_tfile =null;
            File f2 = null;FileWriter fw = null;BufferedWriter bw = null;File ft = null;
            String base_file="Cv";
            int file_num = 01;
            int y_max = 570;
            //String out_file_name=("output1.png");
         //Text Design          
            String font_type=("Helvetica"); //Stand Arial
            int font_size = 22;int color_opacity = 255; //Stand 16|255 //Size Max = 1000 | Opacity Max = 255
            int font_height= (25);//Stand 16
            int font_ColorR = 055;//Stand 055 // Color Max = 255
            int font_ColorG = 030;//Stand 030 //Color Max = 255
            int font_ColorB = 030;//Stand 030 //Color Max = 255
         //Text Function
            int char_perline = 60; 
            int char_spabuf = 35;//Stand 07
            int indendt = 30;
            int char_in_adjust = 5;
         //Postion
            int x_start_main = 180; //Stand 95 //less = Left
            int x_start = x_start_main;
            int y_start_main = 80; //Stand 270 //less = up 
            int y_start = y_start_main;     
         //Text
            boolean on = true;
            int level = 0;
            //Custom button text
            int mis = textmission("",char_spabuf,char_perline,x_start,y_start,
                  font_type,font_size,font_ColorR,font_ColorG,font_ColorB,
                  color_opacity,font_height,file_name,(base_file + file_num +".png"),files_types);
            
            CurrIn_file = file_name;
            Curr_file = (base_file + file_num +".png");
            Curr_tfile = (base_file + file_num +".txt"); 
            try {f2 = new File(Curr_tfile);}catch(Exception e){System.out.println("Error 3-");System.out.print(e);}
            try {fw = new FileWriter(f2);}catch(Exception e){System.out.println("Error 3-");System.out.print(e);}
            try {bw = new BufferedWriter(fw);}catch(Exception e){System.out.println("Error 3-");System.out.print(e);}
         while (on == true)
         {
            Curr_file = (base_file + file_num +".png");
            Curr_tfile = (base_file + file_num +".txt"); 
            //CurrIn_file = Curr_file;
            try {ft = new File(Curr_file);}catch(Exception e){System.out.println("Error 3-");System.out.print(e);}
            if((y_start+(font_height) >= y_max))
            {
               System.out.println("-New files");
               file_num = file_num + 1;
               y_start = y_start_main;
               CurrIn_file = file_name;
               Curr_file = (base_file + file_num +".png");
               Curr_tfile = (base_file + file_num +".txt"); 
               try {f2 = new File(Curr_tfile);}catch(Exception e){System.out.println("Error 3-");System.out.print(e);}
               try {fw = new FileWriter(f2, true);}catch(Exception e){System.out.println("Error 3-");System.out.print(e);}
               try {bw = new BufferedWriter(fw);}catch(Exception e){System.out.println("Error 3-");System.out.print(e);}    
            }
            System.out.println(" ");
            //JOptionPane.showMessageDialog(new JFrame(),("Status Report\n"+"_-File number :"+ file_num +"\n_-Level :"+ level +"\n_-Curr File load :"+ y_start +"/" + y_max));
            System.out.println("___________Status Report___________");
            System.out.println("_-File number:"+ file_num);
            System.out.println("_-Level :"+ level);
            System.out.println("_-Curr File load :"+ y_start +"/" + y_max);
            
            
            Random rand = new Random();
            int rand_int1 = rand.nextInt(256); 
            int rand_int2 = rand.nextInt(256); 
            int rand_int3 = rand.nextInt(256); 
            font_ColorR = rand_int1;font_ColorG = rand_int2;font_ColorB = rand_int3; //custom blue
            
            

            System.out.println("Enter tag"); 
            //Real input 1
            //Scanner next_tag = new Scanner(System.in);String next_tags =next_tag.nextLine();
            //Real inputs 2
            //String next_tags = JOptionPane.showInputDialog("Enter tag");System.out.println("-->" + next_tags);
            //Test inputs
            String next_tags = callFileinput(); System.out.println("-->" + next_tags);
            
            next_tags = bannedwordCheck(next_tags);
            
            y_start = textmission(next_tags,char_spabuf,char_perline,x_start,y_start,
                            font_type,font_size,font_ColorR,font_ColorG, font_ColorB,
                            color_opacity,font_height,CurrIn_file,Curr_file,files_types);

            font_ColorR = 238;font_ColorG = 238;font_ColorB = 238;//Custom white
            //font_ColorR = 000;font_ColorG = 000;font_ColorB = 000;//Black

            
            
            System.out.println("Enter Comment");
            //Real inputs 1
            //Scanner next_comment = new Scanner(System.in);String next_comments =next_tag.nextLine();
            //Real inputs 2
            //String next_comments = JOptionPane.showInputDialog("Enter Comment");System.out.println("-->" + next_comments);
            //Test inputs
            String next_comments = callFileinput(); System.out.println("-->" + next_comments);
            
            
            next_comments = bannedwordCheck(next_comments) ;
            
            try {bw.write(next_comments+", ,");bw.flush();}catch(Exception e){System.out.println("Error 3-");System.out.print(e);} 
            
            y_start = textmission(next_comments,char_spabuf,char_perline,x_start,y_start,
                            font_type,font_size,font_ColorR,font_ColorG, font_ColorB,
                            color_opacity,font_height,CurrIn_file,Curr_file,files_types);
            
            //System.out.println("1 = level(=), 2 = level+, 3 = level-, 4 = New lead, 5 = Done, 6 = Force New File");
            //Real inputs 1              
            //Scanner option = new Scanner(System.in);String optiont = option.nextLine();          
            //Real inputs 2
            //String optiont = JOptionPane.showInputDialog("1 = level(=)\n 2 = level+\n 3 = level-\n 4 = New lead\n 5 = Done\n 6 = Force New File");System.out.println("-->" + optiont); 
            //Test inputs
            String optiont = callFileinput(); System.out.println("-->" + optiont);
            
            switch(optiont) 
               {
                  case "1"://new level(=)
                     CurrIn_file = Curr_file;
                     break;
                  case "2"://new level+
                     x_start = x_start + indendt;
                     level = level + 1;
                     //char_spabuf = char_spabuf + 6;
                     char_perline = char_perline - char_in_adjust;
                     CurrIn_file = Curr_file;
                     break;
                  case "3"://new level-
                     System.out.println("level-// how far out of "+level);
                     //Real inputs 1              
                     //Scanner option3 = new Scanner(System.in);String optiont3 = option.nextLine();          
                     //Real inputs 2
                     //String optiont3 = JOptionPane.showInputDialog("level-// how far out of "+level);System.out.println("-->" + optiont3); 
                     //Test inputs
                     String optiont3 = callFileinput(); //System.out.println("-->" + optiont);
                     switch(optiont3) 
                     {
                        case ""://new level-
                           optiont3 = "1";
                           x_start = x_start - (indendt*(Integer.parseInt(optiont3.replaceAll("\\s",""))));
                           level = level - 1*(Integer.parseInt(optiont3.replaceAll("\\s","")));
                           char_perline = char_perline + char_in_adjust*(Integer.parseInt(optiont3.replaceAll("\\s","")));
                           CurrIn_file = Curr_file;
                           break;
                        default:
                           x_start = x_start - (indendt*(Integer.parseInt(optiont3.replaceAll("\\s",""))));
                           level = level - 1*(Integer.parseInt(optiont3.replaceAll("\\s","")));
                           char_perline = char_perline + char_in_adjust*(Integer.parseInt(optiont3.replaceAll("\\s","")));
                           CurrIn_file = Curr_file;
                           break;
                     }
                     break;
                  case "4"://New lead
                     x_start = x_start_main;
                     level = 0;
                     char_perline = 116;
                     CurrIn_file = Curr_file;
                     break;   
                  case "5":
                     System.out.println("Done---");
                     on = false;
                     CurrIn_file = Curr_file;
                     break;
                  case "6":
                     System.out.println("- New files pushed");
                     file_num = file_num + 1;y_start = y_start_main;
                     
                     CurrIn_file = file_name;
                     
                     Curr_file = (base_file + file_num +".png");
                     Curr_tfile = (base_file + file_num +".txt");
                      
                     try {f2 = new File(Curr_tfile);}catch(Exception e){System.out.println("Error 3-");System.out.print(e);}
                     try {fw = new FileWriter(f2, true);}catch(Exception e){System.out.println("Error 3-");System.out.print(e);}
                     try {bw = new BufferedWriter(fw);}catch(Exception e){System.out.println("Error 3-");System.out.print(e);}
                     break;
                  default:
                     break;
                  }
              
         }
         try{bw.close();}catch(Exception e){System.out.println("Error 3-");System.out.print(e);} 
         
         
         // Scanner next_comment = new Scanner(System.in);System.out.println("Enter Comment"); 
//          String Text_to_add = next_comment.nextLine();
//          
//          Scanner nex2t_comment = new Scanner(System.in);System.out.println("Enter Comment"); 
//          String Ttext_to_add = nex2t_comment.nextLine();
         
         //JOptionPane.showInputDialog("Enter Comment");
            System.out.println("Text_to_add recieved");    
   }
   public static int textmission(String Text_to_add, int char_spabuf, int char_perline, int x_start, int y_start,
                           String font_type, int font_size, int font_ColorR, int font_ColorG,int font_ColorB, 
                           int color_opacity,int font_height,String file_name, String out_file_name,String files_types)
   {    
      BufferedImage img = null; File f = null;      
         try{img = ImageIO.read(new File(file_name));}catch(IOException e){System.out.println(e);} 
		   BufferedImage temp = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_INT_RGB);
         
      Graphics object_graphics = creatingGraphicObject(font_type,font_size,font_ColorR,font_ColorG,
                                                      font_ColorB,color_opacity,img,temp);
     int mis  = addthis_comment(Text_to_add,char_spabuf,char_perline,x_start,y_start,object_graphics,
                                                      temp,font_height,f,out_file_name,files_types);
      return mis;
   }
   
   public static Graphics creatingGraphicObject(String font_type, int font_size, int font_ColorR, 
                                 int font_ColorG, int font_ColorB, int color_opacity,BufferedImage img,BufferedImage temp) 
   {
      Graphics object_graphics = temp.getGraphics();object_graphics.drawImage(img, 0, 0, null);
      object_graphics.setFont(new Font(font_type,Font.PLAIN, font_size));//font type
      object_graphics.setColor(new Color(font_ColorR, font_ColorG,font_ColorB,color_opacity));
      return object_graphics;
   }
    
   public static int addthis_comment(String Text_to_add,int char_spabuf,int char_perline,int x_start,int y_start,
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
         String [] i_lines = Text_to_add.split("\n");
         int lineCount = 0;
         for( lineCount = 0;lineCount < (i_lines.length); lineCount ++)
         {
            int xPos = x_start;
            int yPos = y_start + lineCount * font_height;
            String line = i_lines[lineCount];
            object_graphics.drawString(line, xPos, yPos);
         }     
      // releases any system resources that it is using 
      object_graphics.dispose(); // releases any system resources that it is using
      f = new File(out_file_name); 
      try{ImageIO.write(temp,files_types, f);}catch(IOException e){System.out.println(e);}//trying to update image
      //System.out.println("then " + y_start);
      //System.out.println("now " + (y_start + lineCount * font_height));
      //System.out.println("- lineCount "+lineCount);
      //System.out.println("- font_height "+font_height);
      return y_start + lineCount * font_height;
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
   public static String callFileinput() 
   {
      //vars
      String linenum_needed = null;String line2 = null;String line3 = null;int result = 00;File f1 = null;
      File f2 = null;FileReader fr1 = null;FileReader fr2 = null;FileWriter fw = null;BufferedReader br1 = null;
      BufferedReader br2 = null;BufferedWriter bw = null;     
      try {//Get File 1
         f1 = new File("Tester.txt");//System.out.println ("1 - File Opened: Tester.txt");
         f2 = new File("Tester2.txt");//System.out.println ("2 - File Opened: Tester2.txt");
         fr1 = new FileReader(f1);
         fr2 = new FileReader(f2);
         br1 = new BufferedReader(fr1);
         br2 = new BufferedReader(fr2);
         }catch(Exception e){System.out.println("Respone not recive from file - Error 1-");System.out.print(e);}           
      try {//Read line 1
         linenum_needed = br2.readLine();//System.out.println ("2 - Line# needed :" + linenum_needed);
         }catch(Exception e){System.out.println("Respone not recive from file - Error 2-");System.out.print(e);}  
      try {//line 1 to integer object          
         result = ((Integer.parseInt(linenum_needed))-1);//System.out.println ("3 - Result:" + result);
         }catch(Exception e){System.out.println("Error 3-");System.out.print(e);}         
      try {//Getting the needed line
         int i = 0;
         while (i <= (result))
         {line2 = br1.readLine();
            //System.out.println("4 - Line On :" + line2); 
            //System.out.println("5 - Line # :" + i);
            //if(i==result){System.out.println ("6 - :" + line2);}
            i++;}
         }catch(Exception e){System.out.println("Respone not recive from file - Error 4");System.out.println(e);} 
      try {//Close used files  
         fr1.close();br1.close();fr2.close();br2.close();
         //System.out.println ("7 - File Closed: Tester1.txt");
         //System.out.println ("8 - File Closed: Tester2.txt");
         }catch(Exception e){System.out.println("Respone not recive from file - Error 5");System.out.println(e);}               
      try {//editing num
         f2 = new File("Tester2.txt");//System.out.println ("9 - File Opened: Tester2.txt");
         fr1 = new FileReader(f2);br1 = new BufferedReader(fr1);
         line3 = br1.readLine();//System.out.println ("10 - Line#needed edit :" + line3);
         br1.close();
         fw = new FileWriter(f2);bw = new BufferedWriter(fw);
         bw.write(new Integer((result+2)).toString());bw.flush();bw.close();//System.out.println ("11 - done"); 
         }catch(Exception e){System.out.println("Respone not recive from file - Error 6");System.out.println(e);}     
   return line2;
   }
   public static void callFileinputReset() 
   {
      //vars
      File f2 = null;FileReader fr1 = null;FileReader fr2 = null;FileWriter fw = null;BufferedReader br1 = null;
      BufferedReader br2 = null;BufferedWriter bw = null; 
      try {//try reset
         f2 = new File("Tester2.txt");
         fw = new FileWriter(f2);bw = new BufferedWriter(fw);
         bw.write("1");bw.flush();bw.close();
      }catch(Exception e){System.out.println("Respone not recive from file - Error 6");System.out.println(e);}
   
   }
   public static String bannedwordCheck(String test) 
   {
      test = test.replace("fuck","duck");test = test.replace("Fuck","Duck");
      test = test.replace("nigger","figgear");test = test.replace("Nigger","Figgear");
      test = test.replace("niggers","figgears");test = test.replace("Niggers","Figgears");
      test = test.replace("nigg","figg");test = test.replace("Nigg","Figg");
      test = test.replace("sex","kex");test = test.replace("Sex","kex");
      test = test.replace("retard","offtard");test = test.replace("Retard","Offtard");
      test = test.replace("bitch","fitch");test = test.replace("Bitch","Fitch");
      test = test.replace("cunt","runt");test = test.replace("Cunt","Runt");
      test = test.replace("cunts","runts");test = test.replace("Cunts","Runts");
      test = test.replace("faggot","taggot");test = test.replace("Faggot","Taggot");
      test = test.replace("faggots","taggots");test = test.replace("Faggots","Taggots");
      test = test.replace("pussy","wuss");test = test.replace("Pussy","Wuss");
      test = test.replace("nigga","wigga");test = test.replace("Nigga","Wigga");
      test = test.replace("Fag","Gag");test = test.replace("fag","gag");
      test = test.replace("puss","wuss");test = test.replace("Puss","Wuss");
      test = test.replace("shit","shift");test = test.replace("Shit","Shift");
      //fuck Fuck nigger Nigger sex Sex Retard retard bitch Bitch
      return test;
   }

} 
   
   

