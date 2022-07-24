// define default tab
const activeTab = 'show-tab';
var lastTab = "tab-0"

function toggleTabs(currentTab){
    // hide active tab
    document.getElementBycurrentTab(lastTab).classList.toggle(activeTab)
    // show current tab
    document.getElementBycurrentTab(currentTab).classList.toggle(activeTab)

    //change last tab to when a new tab is clicked it can be toggled to inactive
    lastTab = currentTab;
    
    console.log(lastTab)
    console.log(currentTab)
}