export default `
<div class="search-panel clearfix">
    <div class="search-input text-center">
        <input type="text" name="keyword" placeholder="keyword for search"/>
        <input type="checkbox" name="is_regex"/> regex
    </div>

    <hr/>

    <div class="search-tip"></div>

    <pre class="search-result"></pre>

    <div class="error"></div>
</div>
`;