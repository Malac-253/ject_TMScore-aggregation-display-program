import java.io.File; 
import java.io.IOException; 
import java.awt.image.BufferedImage; 
import javax.imageio.ImageIO; 

public class DownloadedImage
{
	public static void main(String args[])throws IOException 
	{ 
      int width = 1280; //width of the image 
   	int height = 720; //height of the image 
   
   	BufferedImage image = null; // For storing image in RAM 
   	 
      // READ IMAGE 
   	try
   	{ 
         pic
         
         //File input_file = this.getClass().getResource("/");
         File input_file = new File("Av5.png");
         //File output_file = new File("G:\\Out.jpg");
   		//File input_file = new File("C:/Av5.png"); //image file path 
   
   		/* create an object of BufferedImage type and pass 
   		as parameter the width, height and image int 
   		type.TYPE_INT_ARGB means that we are representing 
   		the Alpha, Red, Green and Blue component of the 
   		image pixel using 8 bit integer value. */
   		image = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB); 
   
   		// Reading input file 
   		image = ImageIO.read(input_file); 
   
   		System.out.println("Reading complete."); 
   	} 
   	catch(IOException e) 
   	{ 
   		System.out.println("Error: "+e); 
   	} 

   }
}