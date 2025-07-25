import requests
from bs4 import BeautifulSoup

def debug_page_structure():
    url = 'https://tandemovers.com/service-areas/jacksonville/'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    print("=== DEBUGGING PAGE STRUCTURE ===")
    print(f"URL: {url}")
    
    # Check if main exists
    main = soup.find('main')
    print(f"Main found: {main is not None}")
    
    if main:
        # Check main's direct div children
        divs = main.find_all('div', recursive=False)
        print(f"Number of divs in main: {len(divs)}")
        
        for i, div in enumerate(divs[:5]):
            print(f"Div {i} classes: {div.get('class', 'no-class')}")
            print(f"Div {i} id: {div.get('id', 'no-id')}")
        
        # Try to navigate the structure
        if len(divs) > 0:
            first_div = divs[0]
            second_divs = first_div.find_all('div', recursive=False)
            print(f"First div has {len(second_divs)} direct div children")
            
            if len(second_divs) > 1:
                target_div = second_divs[1]
                third_divs = target_div.find_all('div', recursive=False)
                print(f"Target div has {len(third_divs)} direct div children")
                
                if len(third_divs) > 1:
                    main_content = third_divs[1]
                    print("Found main content div!")
                    print(f"Main content classes: {main_content.get('class', 'no-class')}")
                    
                    # Check what's inside
                    content_elements = main_content.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol'])
                    print(f"Found {len(content_elements)} content elements")
                    
                    for elem in content_elements[:3]:
                        print(f"- {elem.name}: {elem.get_text(strip=True)[:100]}...")
                else:
                    print("Not enough third-level divs")
            else:
                print("Not enough second-level divs")
        else:
            print("No divs in main")
    
    # Alternative: look for content by searching for specific text
    print("\n=== SEARCHING FOR CONTENT ===")
    all_text = soup.get_text()
    if "Embark on a seamless" in all_text:
        print("Found main content text!")
        # Find the element containing this text
        for elem in soup.find_all(['div', 'section', 'article']):
            if "Embark on a seamless" in elem.get_text():
                print(f"Found content in: {elem.name} with classes: {elem.get('class', 'no-class')}")
                break

if __name__ == "__main__":
    debug_page_structure() 