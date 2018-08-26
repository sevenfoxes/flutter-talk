export default `

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>jsTree</title>
	<meta name="viewport" content="width=device-width" />
	<!--[if lt IE 9]><script src="//static.jstree.com/3.3.5/assets/html5.js"></script><![endif]-->

	<meta name="robots" content="index,follow" />
	<link rel="stylesheet" href="//static.jstree.com/3.3.5/assets/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="//static.jstree.com/3.3.5/assets/dist/themes/default/style.min.css" />
	<link rel="stylesheet" href="//static.jstree.com/3.3.5/assets/docs.css" />
	<!--[if lt IE 9]><script src="//static.jstree.com/3.3.5/assets/respond.js"></script><![endif]-->

	<link rel="icon" href="//static.jstree.com/3.3.5/assets/favicon.ico" type="image/x-icon" />
	<link rel="apple-touch-icon-precomposed" href="//static.jstree.com/3.3.5/assets/apple-touch-icon-precomposed.png" />
	<script>window.$q=[];window.$=window.jQuery=function(a){window.$q.push(a);};</script>
<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed.xml" /><script>WR = "/";</script><meta property="og:title" content="jstree" /><meta property="og:type" content="website" /><meta property="og:description" content="jsTree is jquery plugin, that provides interactive trees. It is absolutely free, open source and distributed under the MIT license. jsTree is easily extendable, themable and configurable, it supports HTML & JSON data sources and AJAX loading." /><meta property="og:url" content="//www.jstree.com/docs/html/" /><meta property="og:image" content="//www.jstree.com/jstree.png" /><link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="Search jstree API"></head>
<body>
	<header id="head">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-12">
					<h1 id="logo"><a href="//jstree.com">jsTree - jQuery tree plugin<span>3.3.5</span></a></h1>
				</div>
				<div class="col-md-6 col-sm-8">
					<nav>
						<ul class="nav nav-pills" id="menu"><li class="active"><a href="/"><i class="glyphicon glyphicon-home"></i> Home</a></li><li><a href="/demo"><i class="glyphicon glyphicon-flash"></i> Demo</a></li><li><a href="/api"><i class="glyphicon glyphicon-cog"></i> API</a></li><li><a href="/plugins"><i class="glyphicon glyphicon-link"></i> Plugins</a></li></ul>
					</nav>
				</div>
				<div class="col-md-3 col-sm-4">
					<form role="search">
						<input type="text" id="srch" class="form-control" placeholder="API search" />
					</form>
				</div>
			</div>
		</div>
	</header>
	<div class="container" id="content">
		<div class="row page" id="docs" style="display:block;">
			<div class="col-md-12" style="">
				<h3><i class="glyphicon glyphicon-leaf"></i> What is jsTree?</h3>
				<div class="row">
					<div class="col-md-8">
						<p>jsTree is <strong>jquery plugin</strong>, that provides <strong>interactive trees</strong>. It is absolutely <strong>free</strong>, <a href="https://github.com/vakata/jstree/">open source</a> and distributed under the <a href="https://raw.githubusercontent.com/vakata/jstree/master/LICENSE-MIT">MIT license</a>. jsTree is easily extendable, themable and configurable, it supports <strong>HTML &amp; JSON data sources and AJAX loading</strong>.</p>
						<p>jsTree functions properly in either box-model (content-box or border-box), can be loaded as an AMD module, and has a built in mobile theme for responsive design, that can easily be customized. It uses jQuery's event system, so binding callbacks on various events in the tree is familiar and easy.</p>
						<p>Just a few of the features worth noting:</p>
						<ul class="features list-unstyled list-inline">
							<li><i class="glyphicon glyphicon-ok"></i> drag &amp; drop support</li>
							<li><i class="glyphicon glyphicon-ok"></i> keyboard navigation</li>
							<li><i class="glyphicon glyphicon-ok"></i> inline edit, create and delete</li>
							<li><i class="glyphicon glyphicon-ok"></i> tri-state checkboxes</li>
							<li><i class="glyphicon glyphicon-ok"></i> fuzzy searching</li>
							<li><i class="glyphicon glyphicon-ok"></i> customizable node types</li>
						</ul>
						<p id="main-buttons">
							<img src="//static.jstree.com/3.3.5/assets/images/browsers.png" style="max-width:100%; max-height:36px;" alt="" /><br /><small>Chrome 14+, Firefox 3.5+, Opera 12+, Safari 4+, IE8+<br /><em style="color:silver;">older versions may work, but are not tested</em></small><br /><br />
							<a href="https://github.com/vakata/jstree/zipball/3.3.5" class="btn btn-success"><i class="glyphicon glyphicon-download"></i>&nbsp;&nbsp;Download</a>
							<a href="https://groups.google.com/forum/#!forum/jstree" class="btn btn-warning"><i class="glyphicon glyphicon-comment"></i>&nbsp;&nbsp;Discuss</a>
							<a href="https://github.com/vakata/jstree/issues?state=open" class="btn btn-danger"><i class="glyphicon glyphicon-exclamation-sign"></i>&nbsp;&nbsp;Report bugs</a>
							<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&amp;business=paypal@vakata.com&amp;currency_code=USD&amp;amount=&amp;return=//jstree.com/donation&amp;item_name=Buy+me+a+coffee+for+jsTree" class="btn btn-primary"><i class="glyphicon glyphicon-thumbs-up"></i>&nbsp;&nbsp;&nbsp;Donate</a>
						</p>
					</div>
					<div class="col-md-4">
						<div id="jstree1" class="demo">
							<ul>
								<li>Root node 1
									<ul>
										<li data-jstree='{ "selected" : true }'><a href="#"><em>initially</em> <strong>selected</strong></a></li>
										<li data-jstree='{ "icon" : "//jstree.com/tree-icon.png" }'>custom icon URL</li>
										<li data-jstree='{ "opened" : true }'>initially open
											<ul>
												<li>Another node</li>
											</ul>
										</li>
										<li data-jstree='{ "icon" : "glyphicon glyphicon-leaf" }'>Custom icon class (bootstrap)</li>
									</ul>
								</li>
								<li><a href="//www.jstree.com">Root node 2</a></li>
							</ul>
						</div>
						<div id="jstree2" class="demo" style="margin-top:2em;"></div>
						<script>
						$(function () {
							$('#jstree1').jstree();
							$('#jstree2').jstree({'plugins':["wholerow","checkbox"], 'core' : {
								'data' : [
									{
										"text" : "Same but with checkboxes",
										"children" : [
											{ "text" : "initially selected", "state" : { "selected" : true } },
											{ "text" : "custom icon URL", "icon" : "//jstree.com/tree-icon.png" },
											{ "text" : "initially open", "state" : { "opened" : true }, "children" : [ "Another node" ] },
											{ "text" : "custom icon class", "icon" : "glyphicon glyphicon-leaf" }
										]
									},
									"And wholerow selection"
								]
							}});
						});
						</script>
					</div>
				</div>

				<ul class="nav nav-tabs">
					<li ><a href="/" class="nava">Overview</a></li>
					<li><a href="/docs/config" class="nava">Configuration</a></li>
					<li class="active" id="selected_menu"><a href="/docs/html" class="nava">HTML data</a></li>
					<li><a href="/docs/json" class="nava">JSON data</a></li>
					<li><a href="/docs/events" class="nava">Events</a></li>
					<li><a href="/docs/interaction" class="nava">Interaction</a></li>
				</ul>
				<div class="tab-content">
					<div id="html" class="tab-content-item">

				<div class="row">
					<div class="col-md-12">
						<h3><i class="glyphicon glyphicon-leaf"></i> Populating a tree using HTML</h3>
					</div>
				</div>
				<h4>Basic markup</h4>
				<div class="row">
					<div class="col-md-4">
						<p>jsTree can turn a regular unordered list into a tree. The minimal required markup is a <code>&lt;ul&gt;</code> node with some nested <code>&lt;li&gt;</code> nodes with some text inside.</p>
						<p>You should have a container wrapping the <code>&lt;ul&gt;</code> and create the instance on that container. Like so:<br /><code>$('#html1').jstree();</code>.
					</div>
					<div class="col-md-4">
						<pre><code>&lt;div id="html1"&gt;
  &lt;ul&gt;
    &lt;li&gt;Root node 1&lt;/li&gt;
    &lt;li&gt;Root node 2&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
					</div>
					<div class="col-md-4">
						<div class="demo" id="using_html_1">
							<ul>
								<li>Root node 1</li>
								<li>Root node 2</li>
							</ul>
						</div>
					</div>
					<script>
					$(function () {
						$('#using_html_1').jstree();
					});
					</script>
				</div>
				<h4>Nodes with children</h4>
				<div class="row">
					<div class="col-md-4">
						<p>To create a node with child nodes simpy nest an <code>&lt;ul&gt;</code>.</p>
						<p>Internally jstree converts the text to a link, so if there already is a link in the markup jstree won't mind. Like <code>Child node 2</code>.<br />Clicking on the link however will not direct the user to a new page, to do that - intercept the <code>changed.jstree</code> event and act accordingly.</p>
						<p>Keep reading for the section on handling events.</p>
					</div>
					<div class="col-md-4">
						<pre><code>&lt;div id="html1"&gt;
  &lt;ul&gt;
    &lt;li&gt;Root node 1<strong>
      &lt;ul&gt;
        &lt;li&gt;Child node 1&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Child node 2&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;</strong>
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
					</div>
					<div class="col-md-4">
						<div id="using_html_2" class="demo">
							<ul>
								<li>Root node 1
									<ul>
										<li>Child node 1</li>
										<li><a href="#">Child node 2</a></li>
									</ul>
								</li>
							</ul>
						</div>
						<script>
						$(function () {
							$('#using_html_2').jstree();
						});
						</script>
					</div>
				</div>
				<h4>Setting initial state with classes</h4>
				<div class="row">
					<div class="col-md-4">
						<p>To make a node initially selected you can set the <code>jstree-clicked</code> class on the <code>&lt;a&gt;</code> element.</p>
						<p>Similarly you can set the <code>jstree-open</code> class on any <code>&lt;li&gt;</code> element to make it initially extended, so that its children are visible.</p>
						<p>It is a good idea to give your nodes <strong>unique</strong> IDs by adding the <code>id</code> attribute to any <code>&lt;li&gt;</code> element. This will be useful if you need to sync with a backend as you will get the ID back in any events jstree triggers.</p>
					</div>
					<div class="col-md-4">
						<pre><code>&hellip;
&lt;li <strong>class="jstree-open"</strong> <strong>id="node_1"</strong>&gt;Root
  &lt;ul&gt;
    &lt;li&gt;
      &lt;a href="#" <strong>class="jstree-clicked"</strong>&gt;Child&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/li&gt;
&hellip;</code></pre>
					</div>
					<div class="col-md-4">
						<div id="using_html_3" class="demo">
							<ul>
								<li class="jstree-open">Root
									<ul>
										<li><a href="#" class="jstree-clicked">Child</a></li>
									</ul>
								</li>
							</ul>
						</div>
						<script>
						$(function () {
							$('#using_html_3').jstree();
						});
						</script>
					</div>
				</div>
				<h4>Setting initial state with data attribute</h4>
				<div class="row">
					<div class="col-md-4">
						<p>You can also set the state on a node using a <code>data-jstree</code> attribute.</p>
						<p>You can use any combination of the following: <code>opened</code>, <code>selected</code>, <code>disabled</code>, <code>icon</code>.</p>
						<p>Specifying an address (anything containing a <code>/</code>) will display that image as the node icon. Using a string will apply that class to the <code>&lt;i&gt;</code> element that is used to represent the icon.<br />For example if you are using Twitter Bootstrap you can use <code>"icon" : "glyphicon glyphicon-leaf"</code> to display a leaf icon.</p>
					</div>
					<div class="col-md-4">
						<pre><code>&lt;li <strong>data-jstree='{"opened":true,"selected":true}'</strong>&gt;Root
  &lt;ul&gt;
    &lt;li <strong>data-jstree='{"disabled":true}'</strong>&gt;Child&lt;/li&gt;
    &lt;li <strong>data-jstree='{"icon":"//jstree.com/tree.png"}'</strong>&gt;
      Child&lt;/li&gt;
    &lt;li <strong>data-jstree='{"icon":"glyphicon glyphicon-leaf"}'</strong>&gt;
      Child&lt;/li&gt;
  &lt;/ul&gt;
&lt;/li&gt;</code></pre>
					</div>
					<div class="col-md-4">
						<div id="using_html_4" class="demo">
							<ul>
								<li data-jstree='{"opened":true,"selected":true}'>Root
								  <ul>
								    <li data-jstree='{"disabled":true}'>Child</li>
								    <li data-jstree='{"icon":"//jstree.com/tree.png"}'>
								      Child</li>
								    <li data-jstree='{"icon":"glyphicon glyphicon-leaf"}'>
								      Child</li>
								  </ul>
								</li>
							</ul>
						</div>
						<script>
						$(function () {
							$('#using_html_4').jstree();
						});
						</script>
					</div>
				</div>
				<h4>Loading with AJAX</h4>
				<div class="row">
					<div class="col-md-4">
						<p>You can also use AJAX to populate the tree with HTML your server returns. The format remains the same as the above, the only difference is that the HTML is not inside the container, but returned from the server.</p>
						<p>To take advantage of this option you need to use the <a href="/api/#/?f=$.jstree.defaults.core.data"><code>$.jstree.defaults.core.data</code></a> config option.</p>
						<p>Just use a standard jQuery-like AJAX config and jstree will automatically make an AJAX request populate the tree with the response.</p><p>Add a class of <code>jstree-closed</code> to any LI node you return and do not nest an UL node and jstree will make another AJAX call as soon as the user opens this node.</p>
						<p>In addition to the standard jQuery ajax options here you can supply functions for <code>data</code> and <code>url</code>, the functions will be run in the current instance's scope and a param will be passed indicating which node is being loaded, the return value of those functions will be used as URL and data respectively.</p>
					</div>
					<div class="col-md-4">
						<pre><code>$('#tree').jstree({
  'core' : {
    'data' : {
      'url' : 'ajax_nodes.html',
      'data' : function (node) {
        return { 'id' : node.id };
      }
    }
  }
});

// Example response:
&lt;ul&gt;
&lt;li&gt;Node 1&lt;/li&gt;
&lt;li class="jstree-closed"&gt;Node 2&lt;/li&gt;
&lt;/ul&gt;</code></pre>
					</div>
					<div class="col-md-4">
						<div id="using_html_5" class="demo"></div>
						<script>
						$(function () {
							$('#using_html_5').jstree({
								'core' : {
									'data' : {
										'url' : '/static/3.3.5/assets/ajax_nodes.html',
										'data' : function (node) {
											return { 'id' : node.id };
										}
									}
								}
							});
						});
						</script>
					</div>
				</div>

				</div></div>

			</div>
		<p style="text-align:center; margin-top:2em;"><a href="//old.jstree.com">click here for the old site (v.1)</a></p><div style="margin-top:4em; text-align:center; border-bottom:40px solid white;" class="hidden-sm hidden-xs"><script type="text/javascript">google_ad_client = "pub-3390774673776502";/* 728x90, created 9/28/09 */google_ad_slot = "0034777413";google_ad_width = 728;google_ad_height = 90;</script><script type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js"></script></div></div>
	</div>
	<a class="hidden-xs hidden-sm" href="https://github.com/vakata/jstree"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png" alt="Fork me on GitHub"></a>
	<script src="//static.jstree.com/3.3.5/assets/jquery-1.10.2.min.js"></script>
	<script src="//static.jstree.com/3.3.5/assets/jquery.address-1.6.js"></script>
	<script src="//static.jstree.com/3.3.5/assets/vakata.js"></script>
	<script src="//static.jstree.com/3.3.5/assets/dist/jstree.min.js"></script>
	<script src="/static/site.js"></script>
	<script>$.each($q,function(i,f){$(f)});$q=null;</script>
</body>
</html>


`;
